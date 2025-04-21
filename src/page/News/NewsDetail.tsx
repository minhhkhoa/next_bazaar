'use client';

import { getDetailNews } from '@/api/News/getDetailNews';
import { NewsType } from '@/dataType/new';
import React, { useEffect } from 'react'

export default function PageNewsDetail({ id } : {id: string}) {
  const [newsDetail, setNewsDetail] = React.useState<NewsType | undefined>();

  const fetchData = async () => {
    try {
      const data = await getDetailNews(id);
      setNewsDetail(data);
    } catch (error) {
      console.warn("Error:", error);
    }
  }

  useEffect(() => {
    fetchData();
  })

  return <div>{">>check id"}-{id}</div>;
}
