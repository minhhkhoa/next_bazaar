import { Col, Menu } from 'antd';
import { NewsCategory } from "@/data/news/new";

import React from 'react'

export default function NewsCategories() {
  return (
    <>
      <Col className={`bg-[#ffffff] rounded-xl p-2 w-full `}>
        <h1 className="text-[clamp(12px,5vw,24px)] font-bold text-center">
          Danh mục tin tức
        </h1>
        <Menu
          style={{
            backgroundColor: "transparent",
            border: "none",
            width: "100%",
          }}
          mode="inline"
          items={NewsCategory}
        />
      </Col>
    </>
  );
}
