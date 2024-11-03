"use client";
import React, { useEffect, useState } from "react";
import Container from "../../custom/Container";
import Loading from "@/components/modules/custom/Loading";
import axios from "axios";
import { Page } from "@/types";
import Link from "next/link"; 
// import CategoryList from "./CategoryList";
// import Responsivecategories from "./responsive-categories";
// import CategoriesAccordion from "../../custom/CategoriesAccordion";
import Categorieslist from "./categories-list";
export default function Menus() {
  const [loading, setLoading] = useState(false);
  const [categorydd, setCategorydd] = useState(false);
  const [pages, setPages] = useState([]);
  const categoryRef = React.useRef<HTMLDivElement>(null);
  // get api
  useEffect(() => {
    const getPages = async () => {
      setLoading(true);

      await axios
        .get(process.env.NEXT_PUBLIC_API_URL + "/api/pages")
        .then((response) => {
          setPages(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getPages();
  }, []);

  
  const handleCategory = () => {
    setCategorydd(!categorydd)
    categoryRef.current?.focus();
    // document.querySelector("#categoryList")?.classList.toggle("!flex");
  };


  useEffect(() => {
    if (categorydd) {
      document.addEventListener("mousedown", handleCategory);
    } else {
      document.removeEventListener("mousedown", handleCategory);
    }
    return () => {
      document.removeEventListener("mousedown", handleCategory);
    };
  }, [categorydd]);


  return (
    <>
      <section className="w-full hidden lg:flex">

        {loading && <Loading isLoading={loading} />}
        <div className="py-2 w-full border-y border-primary-100 ">
          <Container>
            <div className="flex justify-betwee justify-between flex-1">
              <div className="flex items-center gap-8">
                <div className="relative">                 
                <Categorieslist   />
              </div>
              <div className="flex">
                {pages &&
                  pages.map((item: Page, idx: number) => {
                    return (
                      <Link
                        className="capitalize text-primary-600 hover:text-primary-900"
                        key={idx}
                        href={item.link}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
              </div>
            </div>
            <div className="flex text-primary-600 items-center capitalize">
              Free shipping over 0$
            </div>
        </div>
      </Container>
    </div >

    </section >
   
    
    </>
  );
}
