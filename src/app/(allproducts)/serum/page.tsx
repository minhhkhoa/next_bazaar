"use client";

import ListProducts from "@/components/Products/ListProducts";
import banner_serum from "@public/banner/banner_serum.avif";
import React from "react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function Serum() {
  const categoryId = useSelector(
    (state: RootState) => state.products.selectedCategoryId
  );

  return (
    <>
      <ListProducts
        categoryId={categoryId ?? ""}
        banner={banner_serum.src ?? ""}
      />
    </>
  );
}
