import { categories } from "@/data/product-category/products-category";
import { convertToTree } from "@/ultils/treeParent";
import React from "react";

export default function HeaderMenu() {
  // Chuyển đổi sang tree
  const treeData = convertToTree(categories);
  console.log(treeData)
  return <div>HeaderMenu</div>;
}
