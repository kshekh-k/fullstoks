"use client";
import { cn } from "@/lib/utils";
import { Product } from "@/types";
import React, { useEffect, useState } from "react";
import Container from "../../custom/Container";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import { m } from "framer-motion";
import Loading from "../../custom/Loading";
import Image from "next/image";

export default function ProductImage({
  className,
  product,
  images,
  active,
}: {
  className: string;
  product: Product;
  images: string[];
  active: number;
}) {
  const [loading, setLoading] = useState(false);
  const [changeImage, setChangeImage] = useState(images[active]);

  useEffect(() => {
    setLoading(false);
    setChangeImage(images[active]);
  }, [product, images, active]);

  return (

    <>

      {loading && <Loading isLoading={loading} />}
      <div className={cn("flex flex-col gap-y-6 overflow-hidden", className)}>
        <div className="border py-10 border-primary-900/5 grid place-content-center h-96 p-2">
          <Zoom>
            <m.img
              src={changeImage}
              alt="image"
              width="400"
              height="400"
              className="object-contain cursor-pointer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
          </Zoom>
        </div>

        <div className="flex items-center justify-center gap-4 mt-10">
          {images.map((item: string, idx: number) => (
            <div className={`p-1 border border-primary-900/10 hover:border-primary-400 overflow-hidden`} key={idx}>
              <div onClick={() => setChangeImage(item)} className="grid w-full place-content-center cursor-pointer h-14 overflow-hidden" >
                <Image src={item} width={50} height={50} className={'w-auto h-auto max-h-full object-cover'} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>

  );
}
