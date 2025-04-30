"use client";

import ListProducts from "@/components/Products/ListProducts";
import banner_clothes_man from "@public/banner/banner_quanaonam.jpg";
import React from "react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function ClothesMan() {
  const categoryId = useSelector(
    (state: RootState) => state.products.selectedCategoryId
  );
  
  return (
    <>
      <ListProducts
        categoryId={categoryId ?? ""}
        banner={banner_clothes_man.src ?? ""}
      />
    </>
  );
}


