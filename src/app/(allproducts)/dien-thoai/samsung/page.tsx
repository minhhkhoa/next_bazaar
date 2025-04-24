"use client";

import ListProducts from "@/components/ListProducts/ListProducts";
import { useSearchParams } from "next/navigation";
import banner_samsung from "@public/banner//banner_ss.jpg";
import React from "react";

export default function Samsung() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  return (
    <>
      <ListProducts
        categoryId={categoryId ?? ""}
        banner={banner_samsung.src ?? ""}
      />
    </>
  );
}
