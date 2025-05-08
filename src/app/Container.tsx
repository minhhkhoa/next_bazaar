"use client";

import React, { useEffect } from "react";
import Header from "@/components/Header/Header";
import { setCategory } from "@/redux/features/productSlice";
import { usePathname } from "next/navigation";
import { getKeyCategoryBySlug } from "@/ultils/getSlugParent";
import { useDispatch } from "react-redux";

const SlugCategory = [
  "samsung",
  "iphone",
  "laptop",
  "quan-ao-nam",
  "thoi-trang-nu",
  "serum",
  "perfume",
  "tin-tuc",
];

const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const dispatch = useDispatch();
  const pathname = usePathname().split("/");
  const isSlugCategory = SlugCategory.includes(pathname[pathname.length - 1]);
  
  const keyCategory = isSlugCategory
    ? getKeyCategoryBySlug(pathname[pathname.length - 1])
    : getKeyCategoryBySlug(pathname[pathname.length - 2]);

  useEffect(() => {
    if (keyCategory) {
      dispatch(setCategory(keyCategory));
    }
  }, [pathname, keyCategory, dispatch]);
  return (
    <>
      <header>
        <Header />
      </header>

      {children}
    </>
  );
};

export default Container;
