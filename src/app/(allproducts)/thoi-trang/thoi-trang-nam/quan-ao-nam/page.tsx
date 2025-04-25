"use client";

import ListProducts from "@/components/Products/ListProducts";
import { useSearchParams } from "next/navigation";
import banner_clothes_man from "@public/banner/banner_quanaonam.jpg";
import React from "react";

export default function ClothesMan() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  return (
    <>
      <ListProducts
        categoryId={categoryId ?? ""}
        banner={banner_clothes_man.src ?? ""}
      />
    </>
  );
}


