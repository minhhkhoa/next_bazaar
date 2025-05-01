"use client";

import { getDetailNews } from "@/api/News/getDetailNews";
import LeftNews from "@/components/News/LeftNews";
import NewsCategories from "@/components/News/LeftNews/NewsCategories";
import RightNewsDetail from "@/components/News/RightNews/RightNewsDetail";
import { NewsType } from "@/dataType/new";
import useWindowSize from "@/hook/WindowSize/useWindowSize";
import { RootState } from "@/redux/store";
import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

export default function PageNewsDetail() {
  const [newsDetail, setNewsDetail] = React.useState<NewsType | undefined>();
  const { width } = useWindowSize();

  const newsId = useSelector((state: RootState) => state.news.newsId) as string;
  const fetchData = useCallback(async () => {
    try {
      const data = await getDetailNews(newsId ?? "");
      setNewsDetail(data);
    } catch (error) {
      console.warn("Error:", error);
    }
  }, [newsId]);

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
