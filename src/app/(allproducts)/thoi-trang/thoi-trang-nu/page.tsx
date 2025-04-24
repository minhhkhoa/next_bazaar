"use client";

import ListProducts from "@/components/ListProducts/ListProducts";
import { useSearchParams } from "next/navigation";
import banner_fashion_woman from "@public/banner/banner_thoitrangnu.jpg";
import React from "react";

export default function FashionWoman() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  return (
    <>
      <ListProducts
        categoryId={categoryId ?? ""}
        banner={banner_fashion_woman.src ?? ""}
      />
    </>
  );
}

