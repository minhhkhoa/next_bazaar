import { NewContentType, NewsType } from "@/dataType/new";
import { ClockCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Divider, Row } from "antd";
import Image from "next/image";
import React from "react";
import Comment from "../Comment/Comment";

export default function RightNewsDetail({
  NewsDetail,
}: {
  NewsDetail: NewsType;
}) {
  const content: NewContentType[] = NewsDetail.content;

  return (
    <>
      <Row className="flex-3 !flex-col gap-5">
        <h1 className="text-3xl font-bold">{NewsDetail?.title}</h1>
        <div className="flex gap-3 font-medium text-[#808080]">
          <div>
            <UserOutlined className="px-2" />
            {NewsDetail.author}
          </div>
          <>|</>
          <div>
            <ClockCircleOutlined className="px-2" />
            {NewsDetail.date_publish}
          </div>
        </div>

        <div>
          {content.map((item: NewContentType, index: number) => (
            <div key={index} className="my-5">
              <h1 className="font-normal text-2xl">
                {index + 1 + ". "}
                {item.label}
              </h1>
              <div
                className="my-5"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></div>
              <div className="flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={"alt"}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className=" w-[500px] h-[300px] object-cover rounded-[8px]"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="w-full">
          <Divider className="!w-[40%]"/>
          <h1 className="text-2xl font-extralight my-5">Viết bình luận của bạn</h1>
          <Comment />
        </div>
      </Row>
    </>
  );
}
