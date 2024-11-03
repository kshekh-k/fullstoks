"use client";
import React from "react";
import { cn } from "@/lib/utils";
import "./style.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import Container from "../../custom/Container";
import {
  Headset,
  CreditCard,
  LockKeyhole,
  Truck,
  Calendar,
} from "lucide-react";

const payment = [
  {
    icon: <Headset className="size-6" />,
    title: '24/7',
    tagline: 'Support every time',
  },
  {
    icon: <CreditCard className="size-6" />,
    title: 'Accept payment',
    tagline: 'Visa, Paypal, Master',
  },
  {
    icon: <LockKeyhole className="size-6" />,
    title: 'Secured payment',
    tagline: '100% Secured',
  },
  {
    icon: <Truck className="size-6" />,
    title: 'Free shipping',
    tagline: 'over over 300$',
  },
  {
    icon: <Calendar className="size-6" />,
    title: '30 days return',
    tagline: '30 days guarantee',
  },
]


export default function Payments() {
  return (
    <section className="bg-primary-900/5 py-4">
      <Container>
        <div className="grid grid-cols-5 gap-4 px-3 py-10">
    {payment.map((item, index)=>(
          <div key={index} className={`flex items-center justify-start gap-5 relative after:w-px after:h-10 after:absolute after:top-1/2 after:left-0 after:-translate-y-1/2 after:bg-primary-200 ${index == 0 ? 'after:hidden pl-0' : 'pl-5'}`} >
            <div className="bg-primary-500 rounded-full size-12 flex justify-center items-center text-white shrink-0">
             {item.icon}
            </div>
            <div className="flex flex-col justify-center gap-2">
              <h1 className="uppercase font-bold text-sm text-primary-500 leading-none">{item.title}</h1>
              <p className="font-medium text-sm text-primary-900/60 leading-none">{item.tagline}</p>
            </div>
          </div>
))}

        </div>


      </Container>
    </section>
  );
}
