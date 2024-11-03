import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Toast from "./Toast";
import { useForm } from "react-hook-form";
import { FormValues } from "@/types";
import Loading from "./Loading";
import { m } from "framer-motion";
import SearchProduct from "./SearchProduct";
import { Searchicon } from "@/icons";

export default function SearchInput() {
  const [loading, setLoading] = useState(false);
  const inputSearch = useRef<HTMLInputElement>(null);
  const [dataProducts, setDataProducts] = useState([]);
  const { setFocus } = useForm<FormValues>({
    progressive: true,
  });

  const handleFocusOn = () => {
    inputSearch.current?.focus();
  };

  const handleFocusOff = () => {
    inputSearch.current?.blur();
  };

  useEffect(() => {
    setFocus("search");
  }, [setFocus]);

  /** API SEARCH */
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);

    const search = e.currentTarget.value;

    if (search.length === 0) setLoading(false);
    if (search.length > 3) {
      await axios
        .get(process.env.NEXT_PUBLIC_API_URL + "/api/products", {
          params: { search: search },
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
          setDataProducts(data.products);
        })
        .catch((error) => {
          toast.custom(<Toast message={error.message} status="error" />);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const animation = {
    hide: { y: 82, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className={cn("hidden relative w-full group", "xl:block")}>
      <div className="hidden lg:flex relative ">
        <Input
          className="appearance-none bg-transparent flex-1 
          h-12 text-base pl-14"
          placeholder="Apple, iPhone 15, ps5...."
          ref={inputSearch}
          onInput={handleSearch}
          onMouseEnter={handleFocusOn}
          onMouseLeave={handleFocusOff}
        />
        <span className="flex justify-center items-center absolute inset-y-0 w-10 text-primary-900/40 after:w-px after:h-8 after:bg-gray-300 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2">
        <Searchicon className="size-4" />
        </span>
      </div>

      <m.div
        initial={animation.hide}
        whileInView={animation.show}
        transition={{ delay: 0.3 }}
        className="hidden absolute group-hover:flex top-[50px] z-20 rounded-t-xl w-full bg-white border-neutral-100 border shadow-xl "
      >
        {loading ? <Loading isLoading={loading} /> : ""}
        <SearchProduct
          products={dataProducts}
          className="grid grid-cols-3 gap-8 p-8 min-h-80"
        />
      </m.div>
    </div>
  );
}
