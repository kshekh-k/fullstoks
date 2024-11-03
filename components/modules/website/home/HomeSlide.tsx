"use client";
import Link from "next/link";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Slide } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { cn } from "@/lib/utils";
import "./style.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { m } from "framer-motion"; 
import Container from "../../custom/Container";

export default function HomeSlide({ className }: { className?: string }) {
  const animation = {
    hide: { x: 82, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };
  const [loading, setLoading] = useState(false);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const getSlides = async () => {
      setLoading(true);
      await axios
        .get(process.env.NEXT_PUBLIC_API_URL + "/api/slides")
        .then((response) => {
          setSlides(
            response.data.data.filter(
              (item: Slide) => item.slug === "banner-home"
            )
          );
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getSlides();
  }, []);
  //  {
  //     delay: 5000,
  //     disableOnInteraction: false,
  //   }

const hero = [
  {
    thumb:'/assets/images/Slide-1.png',
    mobileThumb:'/assets/images/Slide-1-mobile.png',
    title:'Best Deal of fashion Accessories',
    descp:'Harry up great deal this weekend',
    btn:'Buy Now',
    link:'#'
  },
  {
    thumb:'/assets/images/Slide-2.png',
    mobileThumb:'/assets/images/Slide-2-mobile.png',
    title:'Best Deal of fashion Accessories',
    descp:'Harry up great deal this weekend',
    btn:'Buy Now',
    link:'#'
  },
]


  return (<>
    <Swiper
      autoplay={false}
      spaceBetween={10}
      slidesPerView={1}
      navigation={false}
      pagination={{ 
        clickable: true, 
        el: ".pagination",
        renderBullet: function (index, className) {
          return '<span class="cursor-pointer ' + className + '"><span class="invisible">' + (index + 1) + '</span></span>';
        },
       }}
      modules={[Autoplay, Navigation, Pagination]}
      className={cn("mySwiper  h-full w-full", className)}
    >
     
          <SwiperSlide            
            className="relative  [&>button:block]"
            style={{
              backgroundImage: `url(/assets/images/Slide-1.png)`,
              height: "650px",
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
           >
            
                <Container>
                  <div className="px-3 py-5 flex h-full justify-start items-center">
                    <div className="w-full max-w-xl flex flex-col gap-4">
                      <m.h1
                        initial={animation.hide}
                        whileInView={animation.show}
                        transition={{ delay: 0.3 }}
                        className="text-xl font-bold leading-snug text-left text-white xl:text-4xl uppercase"
                      >
                        Best Deal of fashion Accessories
                      </m.h1>
                      <m.p initial={animation.hide}
                        whileInView={animation.show}
                        transition={{ delay: 0.4 }} className=" text-base text-left text-white">
                       Harry up great deal this weekend
                      </m.p>
                      <m.div initial={animation.hide}
                        whileInView={animation.show}
                        transition={{ delay: 0.5 }} className="flex pt-2">
                        <Link className="block py-2.5 px-6 font-medium tracking-wide border-2 border-white text-white hover:bg-white hover:text-primary-500 uppercase text-sm ease-in-out duration-200"
                          href={`#`} >
                          Buy Now
                        </Link>
                      </m.div>
                    </div>
                  </div>
                </Container>
            
          </SwiperSlide>

          <SwiperSlide            
            className="relative  [&>button:block]"
            style={{
              backgroundImage: `url(/assets/images/Slide-2.png)`,
              height: "650px",
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
           >
            
                <Container>
                  <div className="px-3 py-5 flex h-full justify-end items-center">
                    <div className="w-full max-w-xl flex flex-col gap-4 ">
                      <m.h1
                        initial={animation.hide}
                        whileInView={animation.show}
                        transition={{ delay: 0.3 }}
                        className="text-xl font-bold leading-snug text-left text-primary-500 xl:text-4xl uppercase"
                      >
                        Best Deal of fashion Accessories
                      </m.h1>
                      <m.p initial={animation.hide}
                        whileInView={animation.show}
                        transition={{ delay: 0.4 }} className=" text-base text-left text-primary-500">
                       Harry up great deal this weekend
                      </m.p>
                      <m.div initial={animation.hide}
                        whileInView={animation.show}
                        transition={{ delay: 0.5 }} className="flex pt-2">
                        <Link className="block py-2.5 px-6 font-medium tracking-wide border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white uppercase text-sm ease-in-out duration-200"
                          href={`#`} >
                          Buy Now
                        </Link>
                      </m.div>
                    </div>
                  </div>
                </Container>
            
          </SwiperSlide>
      
      
         
    </Swiper>
    <div className="pagination flex justify-center gap-1 absolute bottom-0 inset-x-0 p-3 md:p-5 z-10" />
    </>
  );
}
