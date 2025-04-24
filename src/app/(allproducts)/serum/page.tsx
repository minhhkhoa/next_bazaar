"use client";

import ListProducts from "@/components/ListProducts/ListProducts";
import { useSearchParams } from "next/navigation";
import banner_serum from "@public/banner/banner_serum.avif";
import React from "react";

export default function Serum() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  return (
    <>
      <ListProducts
        categoryId={categoryId ?? ""}
        banner={banner_serum.src ?? ""}
      />
    </>
  );
}
