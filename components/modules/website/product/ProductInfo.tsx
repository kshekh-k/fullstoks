import { getRating } from "@/lib/utils";
import { Product } from "@/types";
import { Rating } from "@mui/material";
import React from "react";

export default function ProductInfo({ product }: { product: Product }) {
  const rating = getRating(product);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold tracking-wide lg:text-xl xl:text-4xl xl:leading-snug text-primary-500">
        {product.name.substring(0, 150)}
      </h2>

      {/* Ratings  */}
      <div className="inline-flex items-ceneter gap-4">
        <Rating
          name="half-rating-read"
          className=""
          readOnly
          value={rating}
          precision={0.5}
        />

        <span className="pt-0">({product.reviews.length}) reviews</span>
      </div>

       
        <p className="text-primary-900/60 text-sm">{product.description}</p>
       
    </div>
  );
}
