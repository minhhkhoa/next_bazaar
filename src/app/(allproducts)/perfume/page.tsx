"use client";

import ListProducts from "@/components/Products/ListProducts";
import { useSearchParams } from "next/navigation";
import banner_perfume from "@public/banner/banner_pefume.webp";
import React from "react";

export default function Perfume() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  return (
    <>
      <ListProducts
        categoryId={categoryId ?? ""}
        banner={banner_perfume.src ?? ""}
      />
    </>
  );
}
