"use client";
import { FloatButton } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";

export default function BackTopButton() {
  return (
    <FloatButton.BackTop
      icon={<ArrowUpOutlined />}
      type="primary"
      shape="circle"
      style={{
        right: 24,
        bottom: 24,
        backgroundColor: "#1890ff",
        color: "white",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      }}
      visibilityHeight={200} // Hiện khi cuộn hơn 200px
    />
  );
}
