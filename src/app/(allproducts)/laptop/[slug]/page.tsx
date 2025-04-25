'use client'

import React from 'react'
import { useParams, useSearchParams } from "next/navigation";
import ProductDetail from '@/components/Products/ProductDetail';

export default function LaptopDetail() {
  const params = useParams();
  const categoryId = useSearchParams().get("categoryId");
  return (
    <ProductDetail slug={(params.slug)?.toString() ?? ""} categoryId={categoryId ?? ""}/>
  )
}
