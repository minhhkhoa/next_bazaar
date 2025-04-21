"use client";

import { getDetailNews } from "@/api/News/getDetailNews";
import RightNews from "@/components/News/RightNews/RightNews";
import { NewsType } from "@/dataType/new";
import React, { useCallback, useEffect } from "react";

export default function PageNewsDetail({ id }: { id: string }) {
  const [newsDetail, setNewsDetail] = React.useState<NewsType[] | undefined>();

  const fetchData = useCallback(async () => {
    try {
      const data = await getDetailNews(id);
      setNewsDetail(data);
    } catch (error) {
      console.warn("Error:", error);
    }
  }, [id]);

  console.log(">>check newdetail: ", newsDetail);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      {/* check xem có dữ liệu không đã */}
      {newsDetail && <RightNews isNewsDetail={true} News={newsDetail} />}
    </div>
  );
}
