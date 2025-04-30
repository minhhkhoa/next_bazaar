"use client";

import ListProducts from "@/components/Products/ListProducts";
import banner_perfume from "@public/banner/banner_pefume.webp";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Perfume() {
  const categoryId = useSelector(
    (state: RootState) => state.products.selectedCategoryId
  );
  
  return (
    <>
      <ListProducts
        categoryId={categoryId ?? ""}
        banner={banner_perfume.src ?? ""}
      />
    </>
  );
}
