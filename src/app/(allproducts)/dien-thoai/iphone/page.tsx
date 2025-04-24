"use client";

import ListProducts from "@/components/ListProducts/ListProducts";
import { useSearchParams } from "next/navigation";
import banner_iphone from "@public/banner/banner_ip.webp";
import React from "react";

export default function Iphone() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  return (
    <>
      <ListProducts
        categoryId={categoryId ?? ""}
        banner={banner_iphone.src ?? ""}
      />
    </>
  );
}

