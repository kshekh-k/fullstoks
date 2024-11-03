"use client";
import React, { useEffect, useState } from "react";
import Heading from "../../custom/Heading";
import Container from "../../custom/Container";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { cn } from "@/lib/utils";
import "./style.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { Product } from "@/types";
import ProductCard from "../../custom/ProductCard";
import { Anglelefticon, Anglerighticon } from "@/icons";

export default function BestSellersProducts() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      setLoading(true);
      const data = {
        params: {
          bestsellers: "yes"
        }
      }
      axios
        .get(process.env.NEXT_PUBLIC_API_URL + "/api/products", data)
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
    <section className="py-10 relative">
      <Container>
        <div className="relative">
          <Heading name="best sellers products" />
          <div className="-mx-2 pt-3">
            <Swiper
              breakpoints={{
                360: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                575: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 0,
                },
              }}
              autoplay={{
                delay: 25000,
                disableOnInteraction: false,
              }}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              navigation={{
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
              }}
              pagination={false}
              modules={[Autoplay, Navigation, Pagination]}
              className={cn("mySwiper h-full w-full")}
            >
              {products &&
                products.slice(0, 10).map((item: Product, idx: number) => (
                  <SwiperSlide key={idx} className="p-2">
                    <ProductCard loading={loading} item={item} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className='flex gap-2 absolute right-0 top-0'>
            <button className={`size-8 ease-in-out duration-200 border border-primary-900/5 hover:bg-primary-900/5 rounded text-gray-400 flex items-center justify-center left-2 swiper-prev`}>
              <Anglelefticon className="size-3" />
            </button>
            <button className={`size-8 ease-in-out duration-200 border border-primary-900/5 hover:bg-primary-900/5 rounded text-gray-400 flex items-center justify-center right-2 swiper-next`}>
              <Anglerighticon className="size-3" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
