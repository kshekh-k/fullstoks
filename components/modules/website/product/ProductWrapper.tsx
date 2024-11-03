"use client";
import React, { useState } from "react";
import Container from "../../custom/Container";
import ProductImage from "./ProductImage";
import ProductContent from "./ProductContent";
import { Product } from "@/types";

export default function ProductWrapper({ product }: { product: Product }) {
  const [active, setActive] = useState<number>(0);
  const [images, setImages] = useState<string[]>(
    product?.subProducts[active].options[0].images
  );

  return (
    <section className="py-10">
      <Container>
        <div className="gap-20 grid grid-cols-12">
          <ProductImage
            className="text-center col-span-6"
            product={product}
            images={images}
            active={active}
          />
          <ProductContent
            className="col-span-6"
            product={product}
            active={active}
            setImages={setImages}
            setActive={setActive}
          />
        </div>
      </Container>
    </section>
  );
}
