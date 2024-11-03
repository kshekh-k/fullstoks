import { Button } from "@/components/ui/button";
import { IRootState } from "@/store";
import { CartItem } from "@/types";
import { MinusIcon, PlusIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Toast from "./Toast";
import { updateCart } from "@/store/cartSlice";
import { Minusicon, Plusicon } from "@/icons";

export default function QuantityCart({ item }: { item: CartItem }) {
  const { cart } = useSelector((state: IRootState) => ({ ...state }));

  const [qty, setQty] = useState(0);
  const dispatch = useDispatch();

  const updateQty = (value: string) => {
    if (value === "dec") {
      if (qty === 1) {
        toast.custom(
          <Toast message="you reached the limit" status="success" />
        );
        return;
      }
    }

    if (value === "inc") {
      if (qty === 9) {
        toast.custom(
          <Toast message="you reached the limit" status="success" />
        );
        return;
      }
    }

    // Cart operation

    if (value === "dec") {
      setQty(qty === 1 ? qty : qty - 1);
    }

    if (value === "inc") {
      setQty(qty === 9 ? qty : qty + 1);
    }

    // Udate cart
    const newCart = cart.cartItems.map((p: CartItem) => {
      if (p._uid === item._uid) {
        return {
          ...p,
          qty: value === "dec" ? qty - 1 : qty + 1,
        };
      }
      return p;
    });

    dispatch(updateCart(newCart));
  };

  useEffect(() => {
    setQty(item.qty);
  }, [item]);

  return (
    <>
 
    <div className="flex items-center justify-center gap-1 w-28 border border-primary-900/5 rounded p-1">
        <button className="text-primary-500 size-7 hover:bg-primary-900/10 flex justify-center items-center ease-in-out duration-200 rounded-sm"        
            onClick={() => updateQty("dec")} >
          <Minusicon className="size-3" />
        </button>      
        <p className="flex-1 text-center text-base">{qty}</p>
        <button  className="text-primary-500 size-7 hover:bg-primary-900/10 flex justify-center items-center ease-in-out duration-200 rounded-sm"   
          onClick={() => updateQty("inc")} >
          <Plusicon className="size-3" />
        </button>
      </div>




</>  );
}



