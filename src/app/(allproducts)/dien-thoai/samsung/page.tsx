"use client";

import ListProducts from "@/components/Products/ListProducts";
import banner_samsung from "@public/banner//banner_ss.jpg";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Samsung() {
  const categoryId = useSelector(
    (state: RootState) => state.products.selectedCategoryId
  );

  return (
    <>
      <ListProducts
        categoryId={categoryId ?? ""}
        banner={banner_samsung.src ?? ""}
      />
    </>
  );
}
