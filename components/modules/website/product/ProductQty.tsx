import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import Toast from "../../custom/Toast";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { CartItem, Product } from "@/types";
import { IRootState } from "@/store";
import { addToCart, updateCart } from "@/store/cartSlice";
import { MdAddShoppingCart } from "react-icons/md";
import { Minusicon, Plusicon, Shoppingbagicon } from "@/icons";

export default function ProductQty({
  setLoading,
  active,
  optionActive,
  product,
}: {
  setLoading(value: boolean): void;
  active: number;
  optionActive: number;
  product: Product;
}) {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const { cart } = useSelector((state: IRootState) => ({ ...state }));

  const updateQty = (value: string) => {
    if (value === "dec") {
      if (qty === 1) {
        toast.custom(<Toast message="you reached the limit" status="error" />);
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
  };

  const addTocartHandler = async () => {
    setLoading(true);

    await axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/api/cart", {
        params: {
          id: product._id,
          style: active,
          option: optionActive,
        },
      })
      .then((response) => {
        const data = response.data;
        if (qty > response.data.stock) {
          toast.custom(
            <Toast
              message="the stock is limited reduce quantity"
              status="error"
            />
          );
          setLoading(false);
          return;
        }

        // add to cart
        const _uid: string = `${data._id}_${data.styleBefore}_${data.optionBefore}`;

        const exist: CartItem | undefined = cart.cartItems.find(
          (p: CartItem) => p._uid === _uid
        );

        if (exist) {
          //the product option exist in cart so updated it
          const newCart = cart.cartItems.map((p: CartItem) => {
            // update for a single option
            if (p === exist) {
              return { ...p, qty: qty }; // get everything and change the qty
            }
            setLoading(false);
            return p;
          });

          dispatch(updateCart(newCart));
          toast.custom(<Toast message="Product updated" status="success" />);
        } else {
          //option not in the cart so added as new
          dispatch(
            addToCart({
              ...data,
              qty,
              option: data.option,
              _uid,
            })
          );
          toast.custom(
            <Toast message="Product added to cart" status="success" />
          );
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-wrap lg:flex-nowrap w-full items-end gap-10">
      <div className="flex flex-col gap-2">
        <p className="text-base font-medium text-primary-500">Quantity</p>
      <div className="flex items-center justify-center gap-1 w-40 border border-primary-900/5 rounded p-1">
        <button
          className="text-primary-500 size-10 hover:bg-primary-900/10 flex justify-center items-center ease-in-out duration-200 rounded-sm"        
           
          onClick={() => updateQty("dec")}
        >
          <Minusicon className="size-4" />
        </button>
      
        <p className="flex-1 text-center text-base">{qty}</p>
        <button
           className="text-primary-500 size-10 hover:bg-primary-900/10 flex justify-center items-center ease-in-out duration-200 rounded-sm"   
         
          
          onClick={() => updateQty("inc")}
        >
          <Plusicon className="size-4" />
        </button>
      </div>
</div>
      <div className="flex-1">
        <Button
         className="!shadow-none gap-2 h-[50px] w-full font-semibold text-primary-500 hover:bg-primary-500 hover:text-white hover:border-primary-500 border-primary-900/5"
          id="addToCart"
          variant={'outline'}
          size="lg"
          onClick={() => addTocartHandler()}
        >
          <Shoppingbagicon className="size-6"/>
          <span className="capitalize font-bold text-base">
            add to cart
          </span>
        </Button>
      </div>
    </div>
  );
}
