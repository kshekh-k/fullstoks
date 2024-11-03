"use client";
import React from "react";
import Heading from "../../custom/Heading";
import CategoriesAccordion from "../../custom/CategoriesAccordion";
import FiltersPrice from "../../custom/FiltersPrice";
import LatestProducts from "./LatestProducts";
import Responsivecategories from "../header/responsive-categories";

export default function SidebarLeft({
  minPrice,
  maxPrice,
  loading,
  setMinPrice,
  setMaxPrice,
}: {
  minPrice: number;
  maxPrice: number;
  loading: boolean;
  setMinPrice: (value: number) => void;
  setMaxPrice: (value: number) => void;
}) {
  return (
    <div className="max-w-[280px] w-full flex-col gap-8 h-full hidden xl:flex border border-primary-900/5 p-5 rounded">
      {/* categories  */}
      <div className="flex flex-col w-full relative">
        <Heading name="browser categories" />
         
          {/* <CategoriesAccordion className="w-full" /> */}
          <Responsivecategories className={`flex pt-4`} />
         
      </div>

      {/* filters */}
      <div className="flex flex-col w-full relative">
        <Heading name="filters" />
        <div className="flex pt-4">
          <FiltersPrice
            loading={loading}
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
          />
        </div>
      </div>

      {/* Latest products */}

      <div className="flex flex-col w-full relative">
        <Heading name="latest products" />
        <div className="flex-flex-col pt-4">
          <LatestProducts/>
        </div>
      </div>
     </div>
  );
}
