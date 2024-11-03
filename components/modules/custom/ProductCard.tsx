import Skeleton from "@/components/ui/skeleton-product";
import {
  getBestPriceWithDiscountFromProduct,
  getBestPriceWithoutDiscountFromProduct,
  getDiscountRate,
} from "@/lib/utils";
import { Product } from "@/types";
import Link from "next/link";
import React from "react";
import { Rating } from "@mui/material"; 
import Image from "next/image";
import { Hearticon, Shareicon } from "@/icons";
import { Button } from "@/components/ui/button";

export default function ProductCard({
  item,
  loading,
}: {
  item: Product;
  loading: boolean;
}) {
  const active = 0;
  const product = item?.subProducts[active];
  const options = product?.options[active];
  const images = options?.images;

  const bestPiceWithDiscount = getBestPriceWithDiscountFromProduct(item);
  const bestPiceWithoutDiscount = getBestPriceWithoutDiscountFromProduct(item);

  const discountRate = getDiscountRate(
    bestPiceWithoutDiscount,
    bestPiceWithDiscount
  );

  return (
    <>
     
    {loading ? (
    <Skeleton />
    ):(
      <div className="flex flex-col items-center gap-4 border border-primary-900/5 rounded group bg-white ease-in-out duration-200 hover:shadow-2 hover:border-primary-900/10 ">

      <Link
        href={` /products/${item.slug}`}
        className="flex relative p-3 justify-center items-center"
        >
        
           
        
          <div className="h-40 w-auto overflow-hidden flex justify-center items-center">
            <Image src={images[0]} alt="" width={160} height={160} className="object-cover w-auto max-w-full !h-auto max-h-full" />
          </div>
       

        {options.discount === 0 ? (
          ""
        ) : (
          <div className="absolute top-2 left-0">
            <span className="text-white text-sm bg-orange-500 px-2 py-1 rounded-r font-semibold">
              - {options.discount}%
            </span>
          </div>
        )}
      </Link>

      <div className="flex-flex-col gap-2 px-4 items-start">
        <div className="flex text-primary-300 items-center duration-300 ease-in-out">
          <Rating
            size="small"
            className=""
            name="rating"
            value={parseFloat("4")}
            precision={0.5}
            readOnly
          />
          <span className="ms-1 text-sm font-semibold pt-1">({item.reviews.length})</span>
        </div>

        <p className="text-primary-500 font-semibold text-left text-sm uppercase">Category</p>
        <h2 className="h-14 text-sm text-left capitalize pt-1">
          <Link href={`/products/${item.slug}`} className="flex relative text-primary-900/60 hover:text-primary-500 font-medium leading-snug ease-in-out duration-200">
            {item.name.substring(0, 60)}...
          </Link>
        </h2>

      </div>


      <div className="flex justify-start gap-2 px-4 pt-0 w-full">
        <p className="text-primary-700 text-base font-semibold">Price</p>
        {discountRate > 0 &&
          <p className="text-primary-700 text-base font-semibold">${bestPiceWithDiscount}</p>
        }
        <p className={`${discountRate > 0
          ? "line-through text-gray-400 text-lg pl-1 font-medium"
          : "text-primary-700 text-base font-semibold"
          }`}
        >${bestPiceWithoutDiscount}</p>
      </div>
      <div className="flex flex-col gap-4 w-full p-4 pt-0">
      <div className="flex justify-start w-full gap-2">
        <button type="button" className="size-7 bg-primary-900/5 rounded-full flex justify-center items-center text-primary-500 hover:bg-primary-500 hover:text-white ease-in-out duration-200 "><Hearticon className="size-3" /></button>       
        <button type="button" className="size-7 bg-primary-900/5 rounded-full flex justify-center items-center text-primary-500 hover:bg-primary-500 hover:text-white ease-in-out duration-200 "><Shareicon className="size-3" /></button>       
      </div>
      <Button type="button" variant={'outline'} className="!shadow-none font-semibold text-primary-500 hover:bg-primary-500 hover:text-white hover:border-primary-500 border-primary-900/5">Add to Cart</Button>
      </div>

    </div>
    )}
  </>
  );
}
