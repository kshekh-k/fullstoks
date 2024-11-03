"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import React, { useState } from "react"; 
import CurrencyFormat from "./CurrencyFormat";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "@/store";
import { CartItem } from "@/types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoCloseOutline } from "react-icons/io5";
import { updateCart } from "@/store/cartSlice";
import toast from "react-hot-toast";
import Toast from "./Toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { createOrder } from "@/store/orderSlice";
import axios from "axios";
import { signIn } from "next-auth/react";
import Link from "next/link";
import QuantityCart from "./QuantityCart";
import Loading from "./Loading";
import { Hearticon, Shoppingbagicon, Trashicon } from "@/icons";

export default function IconsGroup() {
  const dispatch = useDispatch();
  const { cart, order } = useSelector((state: IRootState) => ({ ...state }));
  const [cartOpen, setCartOpen] = useState(false);

  const handleRmoveItem = (item: CartItem) => {
    const newCart = cart.cartItems.filter(
      (p: CartItem) => p._uid !== item._uid
    );

    dispatch(updateCart(newCart));
    toast.custom(
      <Toast message="Product deleted from cart" status="success" />
    );
  };

  const subtotal = cart.cartItems.reduce(
    (accumulateur: number, currentValue: CartItem) =>
      accumulateur + currentValue.price * currentValue.qty,
    0
  );

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { status, data: session } = useSession();

  const addToCartHandler = async () => {
    if (order.orderDetails.length > 0) {
      toast.custom(
        <Toast message="An order has already been placed" status="success" />
      );

      router.push("/checkout");
      return;
    } else {
      if (cart.cartItems.length === 0) {
        toast.custom(
          <Toast
            message="Your cart is empty go to shop"
            status="success"
            link="/products"
          />
        );

        return;
      }

      if (status === "authenticated") {
        setLoading(true);

        const data = {
          cart: cart.cartItems,
          user_id: session?.user?.email,
        };

        axios
          .post(process.env.NEXT_PUBLIC_API_URL + "/api/cart", data)
          .then((response) => {
            const data = response.data;
            const order = data.addCart;

            if (data) {
              dispatch(createOrder({ order }));
            }
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setLoading(false);
            const element: HTMLElement = document.querySelector(
              "#openCart"
            ) as HTMLElement;

            element.click();
            router.push("/checkout");
          });
      } else {
        signIn();
      }
    }
  };

  return (
    <div
      className={cn(
        "hidden",
        "lg:flex items-center justify-end ms-auto text-right"
      )}
    >
      {loading && <Loading isLoading={loading} />}
      <div className="mr-5 flex items-center">
        <button className="relative text-primary-500 hover:text-blue-500 ease-in-out duration-200">
          <Hearticon className="size-6" />
        </button>
      </div>
      <div className="hidden w-auto ms-auto lg:flex">
        <Sheet open={cartOpen} onOpenChange={setCartOpen}>
          <SheetTrigger className="text-primary-500 hover:text-blue-500 ease-in-out duration-200">
            <div className="relative" id="openCart">
              {cart.cartItems.length > 0 && 
              <span className="absolute rounded-full flex justify-center items-center -top-2 -right-1 bg-green-600  text-sm text-white min-w-5 h-5">
                {cart.cartItems.length}
              </span>
            }
              <Shoppingbagicon className="size-6" />
            </div>
          </SheetTrigger>

          <SheetContent className="p-0 w-full md-[400px] divide-y divide-primary-900/5">
            <SheetHeader className="flex justify-between px-4 py-2">
              <SheetTitle>Shopping cart</SheetTitle>
              <SheetDescription>Your cart details goes here</SheetDescription>
            </SheetHeader>
            <div className="flex flex-col h-full divide-y divide-primary-900/5">
              <div className="flex flex-col gap-4  max-h-3/5 overflow-y-auto flex-1">
                {cart.cartItems.length > 0 ? (
                  cart.cartItems.map((item: CartItem, idx: number) => {
                    return (
                      <div
                        key={idx}
                        className="flex items-start gap-4 border-b border-primary-900/5 p-2 "
                      >
                        <div className="border border-primary-900/5 p-1 size-20 flex justify-center items-center shrink-0">
                        <Image
                          src={item.images[0]}
                          alt=""
                          width={100}
                          height={100} className="w-auto h-auto max-h-full object-cover"
                        /></div>
                        <div className="flex flex-col gap-4 w-full">
                          <div className="flex justify-between w-full">
                            <h3 className="text-primary-900/60 font-semibold">
                              {item.name.substring(0, 40)}
                            </h3>
                            <button onClick={() => handleRmoveItem(item)} className="size-6 shrink-0 text-primary-900/60 hover:text-red-500 ease-in-out duration-200"
                            >
                              <Trashicon className="size-4" />
                              
                            </button>
                          </div>
                          <div className="flex justify-between items-center">
                            <QuantityCart item={item} />
                            <div className="text-primary-500 text-base font-bold">
                              x ${item.price}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="grid place-content-center justify-items-center gap-4 h-full">
                    <Shoppingbagicon className="size-20 text-primary-500" />
                    <h2 className="flex font-bold text-xl text-primary-500">
                      Your cart is empty
                    </h2>

                     
                      <Link
                        href="/products"
                        className="uppercase text-base tracking-wider text-white bg-primary-500 hover:bg-blue-500 rounded py-2 px-5 inline-flex ease-in-out duration-200"
                      >
                        shop
                      </Link>
                   
                  </div>
                )}
              </div>

              <div className="grid grid-rows-2 grid-cols-1 mb-20 px-2 divide-y divide-primary-900/5">
                <div className="flex items-center justify-between ">
                  <span className="capitalize text-primary-500 font-semibold">Sub total</span>
                  <span className="text-xl text-primary-500 font-bold text-right">
                  ${subtotal}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2  w-full py-3 bg-neutral-50 items-center justify-between">
                 
                    <Link href="/cart" className="text-primary-900/60 hover:text-blue-500 px-3 ease-in-out duration-200">
                      View Cart
                    </Link>
                

                  <Button
                    variant="default"
                    size="lg" className="tracking-wider text-base !font-medium"
                    onClick={() => addToCartHandler()}
                  >
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden">
        <CurrencyFormat
          value={0}
          className="text-right text-2xl  font-normal"
        />
      </div>
    </div>
  );
}
