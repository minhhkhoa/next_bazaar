"use client";

import { News } from "@/data/news/new";
import { NewsType } from "@/dataType/new";
import useWindowSize from "@/hook/WindowSize/useWindowSize";
import { setNewsId } from "@/redux/features/newsSlice";
import { Col, Divider } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

export default function FeaturedNews() {
  const { width } = useWindowSize();
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <>
      <Col className={`bg-[#ffffff] rounded-xl pb-5`}>
        <h1 className="text-2xl font-bold text-center p-2">Tin tức nổi bật</h1>
        {News.filter((item: NewsType) => item.featured).map(
          (item: NewsType, index: number) => (
            <div
              key={item.id}
              onClick={() => {
                router.push(`/tin-tuc/${item.id}`);
                const id = item.id as string;
                dispatch(setNewsId(id));
              }}
            >
              <div
                className={`flex items-center gap-5 bg-[#ffffff] cursor-pointer px-5 ${
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

                <div className="font-medium">{item.title}</div>
              </div>

              {index !==
                News.filter((item: NewsType) => item.featured).length - 1 && (
                <div className="w-[90%] mx-auto">
                  <Divider />
                </div>
              )}
            </div>
          )
        )}
      </Col>
    </>
  );
}
