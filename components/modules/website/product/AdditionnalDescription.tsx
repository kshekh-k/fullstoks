import React, { Fragment } from "react";
import { Product, SubCategory } from "@/types";
import Link from "next/link";
import { BreadcrumbSeparator } from "@/components/ui/breadcrumb"; 
import { usePathname } from "next/navigation";
import { Facebookicon, Linkedinicon, Whatsappicon, Xicon } from "@/icons";

export default function AdditionnalDescription({
  product,
  active,
}: {
  product: Product;
  active: number;
}) {
  const pathname = usePathname();
  return (
    <ul className="flex items-center gap-2 justify-between text-primary-500 w-full">
      <li className="inline-flex justify-between gap-2">
        <span className="uppercase">sku:</span>
        <span className="">{product.subProducts[active].sku}</span>
      </li>

      <li className="inline-flex justify-between gap-2">
        <span className="">Cate:</span>
        <span className="">
          {product.subCategories.map((item: SubCategory, idx: number) => {
            return (
              <Fragment key={idx}>
                <Link
                  className="capitalize"
                  href={`categories/${item.link}/products`}
                >
                  {item.name}
                </Link>
                {product.subCategories.length > 1 && <BreadcrumbSeparator />}
              </Fragment>
            );
          })}
        </span>
      </li>

      <li className="inline-flex justify-between gap-2">
         
        <div className="inline-flex gap-3 items-center">
          <span className="">
            <Link className="hover:text-primary-900 text-primary-500 ease-in-out duration-200"
              target="_blank"
              href={`https://x.com/intent/post?url=${process.env.NEXT_PUBLIC_SERVER_URL}${pathname}`}
            >
              <Xicon className="size-2.5" />
            </Link>
          </span>
          <span className="">
              <Link className="hover:text-primary-900 text-primary-500 ease-in-out duration-200"
              target="_blank"
              href={`https://linkedin.com/shareArticle?url=${process.env.NEXT_PUBLIC_SERVER_URL}${pathname}`}
            >
              <Linkedinicon className="size-3" />
            </Link>
          </span>
          <span className="">
              <Link className="hover:text-primary-900 text-primary-500 ease-in-out duration-200"
              target="_blank"
              href={`https://facebook.com/sharer/sharer.php?url=${process.env.NEXT_PUBLIC_SERVER_URL}${pathname}`}
            >
              <Facebookicon className="size-3" />
            </Link>
          </span>
          <span className="">
              <Link className="hover:text-primary-900 text-primary-500 ease-in-out duration-200"
              target="_blank"
              href={`https://web.whatsapp.com/send?text=${process.env.NEXT_PUBLIC_SERVER_URL}${pathname}`}
            >
              <Whatsappicon className="size-3" />
            </Link>
          </span>
        </div>
      </li>
    </ul>
  );
}
