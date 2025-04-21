import { News } from '@/data/news/new';
import { NewsType } from '@/dataType/new';
import useWindowSize from '@/hook/WindowSize/useWindowSize';
import { Col, Divider } from 'antd';
import Image from 'next/image';
import React from 'react'

export default function FeaturedNews() {
  const { width } = useWindowSize();

  return (
    <>
      <Col className={`bg-[#F3F3F3] rounded-xl pb-5`}>
        <h1 className="text-2xl font-bold text-center p-2">Tin tức nổi bật</h1>
        {News.filter((item: NewsType) => item.featured).map((item: NewsType, index: number) => (
          <div key={item.id}>
            <div
              className={`flex items-center gap-5 bg-[#F3F3F3] cursor-pointer px-5 ${
                (width ?? 0) <= 1024 && "flex-col"
              }`}
            >
              <Image
                src={item.url}
                alt={item.title}
                width="0"
                height="0"
                sizes="100vw"
                className="w-[100px] h-auto object-contain rounded-[16px]"
              />

              <div>{item.title}</div>
            </div>

            {index !==
              News.filter((item: NewsType) => item.featured).length - 1 && (
              <div className="w-[90%] mx-auto">
                <Divider />
              </div>
            )}
          </div>
        ))}
      </Col>
    </>
  );
}
