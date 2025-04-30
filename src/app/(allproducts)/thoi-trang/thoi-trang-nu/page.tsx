"use client";

import ListProducts from "@/components/Products/ListProducts";
import banner_fashion_woman from "@public/banner/banner_thoitrangnu.jpg";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function FashionWoman() {
  const categoryId = useSelector(
    (state: RootState) => state.products.selectedCategoryId
  );

  return (
    <>
      <ListProducts
        categoryId={categoryId ?? ""}
        banner={banner_fashion_woman.src ?? ""}
      />
    </>
  );
}

