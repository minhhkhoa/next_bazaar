"use client";

import ListProducts from "@/components/Products/ListProducts";
import { RootState } from "@/redux/store";
import banner_iphone from "@public/banner/banner_ip.webp";
import React from "react";
import { useSelector } from "react-redux";

export default function Iphone() {
  const categoryId = useSelector(
    (state: RootState) => state.products.selectedCategoryId
  );

  return (
    <>
      <ListProducts
        categoryId={categoryId ?? ""}
        banner={banner_iphone.src ?? ""}
      />
    </>
  );
}

