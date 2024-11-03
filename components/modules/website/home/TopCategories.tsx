"use client";
import React, { useEffect, useState } from "react";
import Container from "../../custom/Container";
import { Category } from "@/types";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import Loading from "../../custom/Loading";
import Heading from "../../custom/Heading";

export default function TopCategories() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  // get api
  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      await axios
        .get(process.env.NEXT_PUBLIC_API_URL + "/api/categories")
        .then((response) => {
          setCategories(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getCategories();
  }, []);

  return (
    <section className="py-10 w-full">
      <Container>
        {loading && <Loading isLoading={loading} />}
        <div className="flex flex-col gap-5">
          <Heading name="Trends of Search" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4  ">
            {categories &&
              categories.slice(0, 4).map((item: Category, idx: number) => (
                <Link
                  key={idx}
                  href={`/categories/${item.link}/products`}
                  className="flex items-center cursor-pointer gap-5 border border-primary-900/5 p-3 ease-in-out duration-200 bg-white hover:shadow-1 hover:border-primary-900/10"
                >
                  <div className="border border-primary-900/5 p-3 size-20 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt="category"
                    width="50"
                    height="50"
                  /></div>
                  <h3 className="uppercase text-primary-500 font-medium text-sm text-left">{item.name}</h3>
                </Link>
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
