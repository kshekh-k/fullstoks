import { Button } from "@/components/ui/button";
import { getDate } from "@/lib/utils";
import { Review } from "@/types";
import { Rating } from "@mui/material";
import { ThumbsUp } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";

export default function ReviewItem({ item }: { item: Review }) {
  const { data: session } = useSession();
  const handleLike = () => {
    if (likeDisabled) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }

    // const data = {
    //   reviewId: item._id,
    //   likeBy: item?.reviewBy?._id,
    //   remove: likeDisabled,
    // };
  };

  const [likes, setLikes] = useState(item.likes.length);

  const likeDisabled = item.likes.find((i: string) => i === session?.user?.id)
    ? true
    : false;

  const loading = false;

  return (
    <article className="py-6 text-base bg-white rounded-lg ">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <div className="inline-flex item-center gap-3 text-sm text-gray-900">
            <Image
              alt="review"
              src={
                item?.reviewBy?.image
                  ? item?.reviewBy?.image
                  : "https://cdn-icons-png.flaticon.com/128/149/149071.png"
              }
              width="40"
              height="40"
              className="mr-2 w-auto rounded-full shrink-0"
            />
            <div className="flex flex-col">
              <p className="text-primary-500 text-base font-medium">
                {item.reviewBy?.name ? item.reviewBy?.name : "unknown"}
              </p>
              <p className="flex text-sm text-primary-900/60"> {getDate(item.createdAt)}</p>
            </div>
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="bg-transparent rounded px-3 py-2 flex gap-2 justify-around text-primary-500 !shadow-none"
          disabled={loading}
          onClick={() => handleLike()}
        >
          <ThumbsUp className="size-4 shrink-0" />
          <span>Like</span>
          <span>{likes}</span>
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-primary-900/60 text-sm">{item.review} </p>
        <Rating value={item.rating} precision={0.5} readOnly />
      </div>
    </article>
  );
}
