import React from "react";
import Container from "../../custom/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Detail, Product } from "@/types";
import { Card } from "@/components/ui/card";

export default function ProductSpecifications({
  product,
}: {
  product: Product;
}) {
  return (
    <section className="hidden lg:block py-5">
      <Container>
        <div className="flex flex-col col-span-2">
          <Tabs defaultValue="desc">
            <TabsList className="grid w-fit grid-cols-2">
              <TabsTrigger value="desc">Descriptions</TabsTrigger>
              <TabsTrigger value="spec">Specifications</TabsTrigger>
            </TabsList>
            <TabsContent value="desc">
              <Card className="p-7 tracking-wider text-sm leading-8 text-primary-900/60 ">
                {product.content}
              </Card>
            </TabsContent>
            <TabsContent value="spec">
              <Card className="p-7 flex flex-col divide-y divide-primary-900/5">
                {product.details.map((item: Detail, idx: number) => (
                  <div key={idx} className="grid grid-cols-12 gap-2 items-center">
                    <p className="font-medium capitalize text-primary-500 col-span-5 ">
                      {item.name}
                    </p>
                    <p className="text-sm font-light text-primary-900/60 col-span-7 ">{item.value}</p>
                  </div>
                ))}
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </Container>
    </section>
  );
}
