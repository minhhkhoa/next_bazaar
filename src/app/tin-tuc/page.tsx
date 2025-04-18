import { News, NewsCategory } from "@/data/news/new";
import { Col, Menu, Row } from "antd";
import React from "react";

export default function PageTinTuc() {
  return (
    <>
      <div className="flex gap-5 px-32 py-5">
        {/* News category */}
        <Row className="flex-1 bg-amber-200 gap-5 !flex-col">
          <Col>
            <span>Danh muc tin tuc</span>
            <Menu
              // onClick={onClick}
              style={{ backgroundColor: "gray" }}
              mode="inline"
              items={NewsCategory}
            />
          </Col>
          <Col className="bg-amber-700">
            <span>Tin tuc noi bat</span>
            {News.filter((item) => item.featured).map((item) => (
              <div key={item.id}>{item.title}</div>
            ))}
          </Col>
        </Row>

        {/* News */}
        <Row className="flex-3 bg-amber-600 !flex-col">
          <span>Tin tức</span>
          <Row gutter={[16, 16]}>
            {News.map((item) => (
              <Col key={item.id} xs={24} md={12}>
                <div className="bg-white p-4 shadow rounded">{item.title}</div>
              </Col>
            ))}
          </Row>
        </Row>
      </div>
    </>
  );
}
