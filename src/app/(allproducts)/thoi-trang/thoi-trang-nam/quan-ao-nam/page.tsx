"use client";

import ListProducts from "@/components/Products/ListProducts";
import banner_clothes_man from "@public/banner/banner_quanaonam.jpg";
import React, { useEffect } from "react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { getKeyCategoryBySlug } from "@/ultils/getSlugParent";
import { useDispatch } from "react-redux";
import { setCategory } from "@/redux/features/productSlice";

export default function ClothesMan() {
  const categoryId = useSelector(
    (state: RootState) => state.products.selectedCategoryId
  );

    const dispatch = useDispatch();
    const pathname = usePathname().split("/");
    const keyCategory = getKeyCategoryBySlug(pathname[pathname.length - 1]);
      useEffect(() => {
        if (keyCategory) {
          dispatch(setCategory(keyCategory));
        }
      }, [pathname, keyCategory, dispatch]);
  
  return (
    <>
      <ListProducts
        categoryId={categoryId ?? ""}
        banner={banner_clothes_man.src ?? ""}
      />
    </>
  );
}


