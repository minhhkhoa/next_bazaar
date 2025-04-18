"use client";

import { News, NewsCategory } from "@/data/news/new";
import { NewsType } from "@/dataType/new";
import useWindowSize from "@/hook/WindowSize/useWindowSize";
import {
  ArrowRightOutlined,
  ClockCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Col, Divider, Menu, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PageNews() {
  const { width } = useWindowSize();
  return (
    <>
      {(width ?? 0) <= 1024 && (
        <div className="flex justify-center w-full md:px-32 py-5 text-[clamp(12px,5vw,24px)]">
          <Col className={`bg-[#F3F3F3] rounded-xl p-2 w-full`}>
            <h1 className=" font-bold text-center">Danh mục tin tức</h1>
            <Menu
              // onClick={onClick}
              style={{
                backgroundColor: "transparent",
                border: "none",
                width: "100%",
              }}
              mode="inline"
              items={NewsCategory}
            />
          </Col>
        </div>
      )}
      <div className="flex gap-5 md:px-32 py-5">
        {/* News category */}
        <Row
          className={`flex-1 gap-5 !flex-col  ${
            (width ?? 0) <= 768 && "!hidden"
          }`}
        >
          <Col
            className={`bg-[#F3F3F3] rounded-xl p-2 ${
              (width ?? 0) <= 1024 && "hidden"
            }`}
          >
            <h1 className="text-2xl font-bold text-center">Danh mục tin tức</h1>
            <Menu
              // onClick={onClick}
              style={{ backgroundColor: "transparent", border: "none" }}
              mode="inline"
              items={NewsCategory}
            />
          </Col>
          <Col className={`bg-[#F3F3F3] rounded-xl pb-5`}>
            <h1 className="text-2xl font-bold text-center p-2">
              Tin tức nổi bật
            </h1>
            {News.filter((item) => item.featured).map((item, index: number) => (
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
        </Row>

        {/* News */}
        <Row className="flex-3 !flex-col gap-5">
          <h1 className="text-2xl font-bold">Tin tức</h1>
          <Row gutter={[16, 16]}>
            {News.map((item: NewsType) => {
              const { content } = item;
              return (
                <Col key={item.id} xs={24} md={12}>
                  <div className="flex flex-col bg-white p-4 shadow rounded gap-2 cursor-pointer">
                    <div className="flex items-center justify-center">
                      <Image
                        src={item.url}
                        alt={item.title}
                        width="0"
                        height="0"
                        sizes="100vw"
                        className=" w-full h-auto object-contain rounded-2xl"
                      />
                    </div>
                    <div className="font-bold text-2xl">{item.title}</div>

                    <div className="flex gap-3 italic font-medium">
                      <div>
                        <UserOutlined className="px-2" />
                        {item.author}
                      </div>
                      <>|</>
                      <div>
                        <ClockCircleOutlined className="px-2" />
                        {item.date_publish}
                      </div>
                    </div>

                    <div className="line-clamp-2">{content[0].description}</div>

                    <Link href={`/news/${item.id}`}>
                      Xem chi tiết{" "}
                      <ArrowRightOutlined style={{ color: "#fe9614" }} />
                    </Link>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Row>
      </div>
    </>
  );
}
