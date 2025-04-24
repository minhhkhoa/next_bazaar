"use client";

import ListProducts from "@/components/ListProducts/ListProducts";
import { useSearchParams } from "next/navigation";
import banner_laptop from "@public/banner/banner_laptop.avif";
import React from "react";

export default function Laptop() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  return (
    <>
      <ListProducts
        categoryId={categoryId ?? ""}
        banner={banner_laptop.src ?? ""}
      />
    </>
  );
}
