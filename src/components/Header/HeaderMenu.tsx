import { categories } from "@/data/product-category/products-category";
import { convertToTree } from "@/ultils/treeParent";
import React, { useState } from "react";
import { Menu, MenuProps } from "antd";
import './style.scss';

export default function HeaderMenu() {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  // Chuyển đổi sang tree
  const treeData = convertToTree(categories);
  treeData.push(
    { key: "6", label: "Tin tức", slug: 'tin-tuc', children: [] },
    { key: "7", label: "Liên hệ", slug: 'lien-he',children: [] }
  );

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={treeData}
      className="headerMenu"
    />
  );
}
