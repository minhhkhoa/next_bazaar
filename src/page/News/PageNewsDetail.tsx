"use client";

import { getDetailNews } from "@/api/News/getDetailNews";
import LeftNews from "@/components/News/LeftNews";
import NewsCategories from "@/components/News/LeftNews/NewsCategories";
import RightNewsDetail from "@/components/News/RightNews/RightNewsDetail";
import { NewsType } from "@/dataType/new";
import useWindowSize from "@/hook/WindowSize/useWindowSize";
import React, { useCallback, useEffect } from "react";

export default function PageNewsDetail({ id }: { id: string }) {
  const [newsDetail, setNewsDetail] = React.useState<NewsType | undefined>();
  const { width } = useWindowSize();

  const fetchData = useCallback(async () => {
    try {
      const data = await getDetailNews(id);
      setNewsDetail(data);
    } catch (error) {
      console.warn("Error:", error);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
        {newsDetail && <RightNewsDetail NewsDetail={newsDetail} />}
      </div>
    </>
  );
}
