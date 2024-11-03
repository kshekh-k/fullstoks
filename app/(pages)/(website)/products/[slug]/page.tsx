import { getProductBySlug } from "@/actions/product";
import Container from "@/components/modules/custom/Container";
import FeaturesProducts from "@/components/modules/website/home/FeaturesProducts";
import ProductSpecifications from "@/components/modules/website/product/ProductSpecifications";
import ProductWrapper from "@/components/modules/website/product/ProductWrapper";
import Reviews from "@/components/modules/website/product/Reviews";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import { SubCategory } from "@/types";
import Link from "next/link";
import React, { Fragment } from "react";

export default async function page({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);

  return (
    <>
      {/* Breadcrumb  */}
      <section className="py-3">
        <Container>
          <Breadcrumb>
            <BreadcrumbList className="capitalize flex flex-wrap">
              <Link href={"/products"} className="hover:text-primary-500 ease-in-out duration-200">store</Link>
              <BreadcrumbSeparator />

              <Link href={`/categories/${product.category.name}/products`} className="hover:text-primary-500 ease-in-out duration-200">
                {product.category.name}
              </Link>

              <BreadcrumbSeparator />

              {product.subCategories.map((item: SubCategory, idx: number) => (
                <Fragment key={idx}>
                  <ul>
                    <li>
                      <Link href={`/categories/${item.slug}/products`} className="hover:text-primary-500 ease-in-out duration-200">
                        {item.name}
                      </Link>
                    </li>
                  </ul>
                  <BreadcrumbSeparator />
                </Fragment>
              ))}

              <BreadcrumbItem>
                <BreadcrumbPage className="font-medium text-primary-500">
                  {product.name}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Container>
      </section>

      <ProductWrapper product={product} />
      <ProductSpecifications product={product} />
      <FeaturesProducts />
      <Reviews product={product} />
    </>
  );
}

//dynamic seo
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);
  const images = product.subProducts[0].options[0].images[0];

  return {
    title: `Buy ${product.name.substring(0, 60)}`,
    description: "Become a full stack Nextjs with this project",
    icons: {
      icon: "/assets/images/logo.svg",
    },

    openGraph: mergeOpenGraph({
      title: "Product - Next Js App",
      url: `/products/${params.slug}`,
      images: `${images}`,
    }),
  };
}
