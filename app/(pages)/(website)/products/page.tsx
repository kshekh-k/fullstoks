import ProductsPage from "@/components/modules/website/products/ProductsPage";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import { Metadata } from "next";
import React from "react";

export default function page() {
  return <ProductsPage />;
}

export const metadata: Metadata = {
  title: "Fullstoks Fashion Store",
  description: "A unique fashion store",
  icons: {
    icon: "/assets/images/fullstoks-fav.svg",
  },

  openGraph: mergeOpenGraph({
    title: "Products - Next Js App",
    url: "/",
  }),
};
