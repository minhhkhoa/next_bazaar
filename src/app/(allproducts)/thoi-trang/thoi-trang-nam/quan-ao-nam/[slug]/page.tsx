"use client";

import React from "react";
import { useParams } from "next/navigation";
import ProductDetail from "@/components/Products/ProductDetail";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function ClothesManDetail() {
  const params = useParams();
  const categoryId = useSelector(
    (state: RootState) => state.products.selectedCategoryId
  );
  return (
    <ProductDetail
      slug={params.slug?.toString() ?? ""}
      categoryId={categoryId ?? ""}
    />
  );
}
