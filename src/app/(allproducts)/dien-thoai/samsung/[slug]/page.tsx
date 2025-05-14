"use client";

import React from "react";
import { useParams } from "next/navigation";
import ProductDetail from "@/components/Products/ProductDetail";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function SamsungDetail() {
  const params = useParams();
  const categoryId = useSelector(
    (state: RootState) => state.products.selectedCategoryId
  );

  console.log("categoryId", categoryId);
  return (
    <ProductDetail
      slug={params.slug?.toString() ?? ""}
      categoryId={categoryId ?? ""}
    />
  );
}
