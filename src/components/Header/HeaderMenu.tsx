import { useRouter } from "next/navigation";
import { categories } from "@/data/product-category/products-category";
import { convertToTree } from "@/ultils/treeParent";
import React, { useEffect, useState } from "react";
import { Menu, MenuProps } from "antd";
import "./style.scss";
import removeEmptyChildren from "@/ultils/removeEmptyChildren";
import { usePathname } from "next/navigation";

export default function HeaderMenu() {
  const router = useRouter();
  const [current, setCurrent] = useState("home");
  const pathname = usePathname();

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    if (e.key === "home") {
      router.push("/");
    } else if (e.key === "news") {
      router.push("/tin-tuc");
    } else if (e.key === "contact") {
      router.push("/lien-he");
    } else {
      // Nếu có menu con từ categories
      // Bạn có thể xử lý chuyển hướng dựa vào dữ liệu trong tree, ví dụ:
      const clicked = treeData.find((item) => item.key === e.key);
      if (clicked && clicked.slug) {
        router.push(`/${clicked.slug}`);
      }
    }
  };

  // Chuyển đổi sang tree
  const treeData = convertToTree(categories);
  // Thêm 2 mục bổ sung
  treeData.unshift({
    key: "home",
    label: "Trang chủ",
    slug: "/",
  });
  treeData.push(
    { key: "news", label: "Tin tức", slug: "tin-tuc" },
    { key: "contact", label: "Liên hệ", slug: "lien-he" }
  );

  treeData.forEach(removeEmptyChildren);

  useEffect(() => {
    if (pathname.length > 0) {
      const menuSelected = treeData.find(
        (item) => item.slug === pathname.slice(1)
      );
      setCurrent(menuSelected?.key ?? "home");
    }
  }, [pathname, treeData]);

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={treeData}
      className="headerMenu"
      theme="dark"
    />
  );
}
