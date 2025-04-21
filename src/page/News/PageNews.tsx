"use client";

import NewsCategories from "@/components/News/LeftNews/NewsCategories";
import useWindowSize from "@/hook/WindowSize/useWindowSize";
import React from "react";
import LeftNews from "@/components/News/LeftNews";
import RightNews from "@/components/News/RightNews/RightNews";
import { News } from "@/data/news/new";


export default function PageNews() {
  const { width } = useWindowSize();

  return (
    <>
      {(width ?? 0) <= 1024 && (
        <div className="flex justify-center w-full md:px-32 py-5 text-[clamp(12px,5vw,24px)]">
          <NewsCategories />
        </div>
      )}
      <div className="flex gap-5 md:px-32 py-5">
        {/* News category */}
        <LeftNews />

        {/* News */}
        <RightNews News={News}/>
      </div>
    </>
  );
}
