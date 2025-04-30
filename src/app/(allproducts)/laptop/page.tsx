"use client";

import ListProducts from "@/components/Products/ListProducts";
import banner_laptop from "@public/banner/banner_laptop.avif";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Laptop() {

  //- lấy ra kiểu dữ liệu của state trong store (chính là thằng RootState đó)
  const categoryId = useSelector((state: RootState) => state.products.selectedCategoryId);
  return (
    <>
      <ListProducts
        categoryId={categoryId ?? ""}
        banner={banner_laptop.src ?? ""}
      />
    </>
  );
}
