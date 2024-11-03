import React, { Fragment, useEffect, useState } from "react";
import { Product } from "@/types";
import Link from "next/link";
import Image from "next/image";
import CurrencyFormat from "../../custom/CurrencyFormat";
import { Rating } from "@mui/material";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";

export default function LatestProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = () => {
      setLoading(true);
      axios
        .get(process.env.NEXT_PUBLIC_API_URL + "/api/products")
        .then((response) => {
          setProducts(response.data.data);
        })
        .catch((error) => {
          console.log(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getProducts();
  }, []);

  return (
    <div className="flex flex-col gap-7 mt-4">
      {!loading ? (
        products &&
        products.slice(0, 5).map((item: Product, idx: number) => (
          <Fragment key={idx}>
            <div className="flex gap-5 items-start ">
              <Link href={`/products/${item.slug}`} className="border border-purple-900/5 p-1 flex justify-center items-center overflow-hidden w-20 shrink-0">
                <Image
                  width="100"
                  height="100"
                  alt="product"
                  src={item.subProducts[0].options[0].images[0]} className="object-cover w-auto h-auto max-h-full"
                />
              </Link>

              <div className="flex gap-1 flex-col">
              
                  <h3 className="text-sm font-medium capitalize text-primary-900/60 leading-tight hover:text-primary-500 ease-in-out duration-200">
                  <Link href={`/products/${item.slug}`}>
                    {item.name.substring(0, 35)}
                    </Link>
                  </h3>
                

                <p className="flex justify-between gap-2 text-sm font-semibold text-primary-500">
                ${item.subProducts[0].options[0].price}
                  {/* <CurrencyFormat
                    value={item.subProducts[0].options[0].price}
                  /> */}
                </p>

                <div className="inline-flex items-center">
                  <Rating size="small"
                    className=""
                    name="read-only"
                    value={parseFloat("2")}
                    precision={0.5}
                    readOnly
                  />
                  <span className="text-sm pl-1 pt-1 leading-none text-primary-400">{item.reviews.length}</span>
                </div>
              </div>
            </div>
          </Fragment>
        ))
      ) : (
        <div className="flex flex-col gap-4">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
            (item: number) => (
              <Skeleton key={item} className="h-4 w-full" />
            )
          )}
        </div>
      )}
    </div>
  );
}
