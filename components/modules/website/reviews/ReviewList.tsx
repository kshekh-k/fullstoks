import React, { useState } from "react";
import Container from "../../custom/Container";
import { Review } from "@/types";
import { Pagination } from "@mui/material";
import usePagination from "@/hooks/usePagination";
import ReviewItem from "./ReviewItem";
import Heading from "../../custom/Heading";

export default function ReviewList({ reviews }: { reviews: Review[] }) {
  const [page, setPage] = useState(1);
  const PER_PAGE = 3;
  const count = Math.ceil(reviews.length / PER_PAGE);
  const _DATA = usePagination(reviews, PER_PAGE);

  const handleChange = (e: React.ChangeEvent<unknown>, p: number) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <section className="py-10">
      <Container>
        <div className="flex flex-col gap-4">

        <Heading name={`Reviews (${reviews.length})`} />


           

          {
            _DATA.currentData().map((i: Review, idx: number)=>
            (

              <ReviewItem key={idx}  item={i} />

            ))
          }
          <div className="flex">
            <Pagination
              count={count}
              page={page}
              color="primary"
              variant="outlined"
              shape="rounded"
              onChange={handleChange}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
