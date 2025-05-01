"use client";

import Image from "next/image";
import Link from "next/link";
import SearchProduct from "../Search/SearchProduct";
import type { DrawerProps, MenuProps } from "antd";
import {
  CloseOutlined,
  MenuFoldOutlined,
  PhoneOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge, Tooltip, Dropdown, Space, Button, Drawer, Menu } from "antd";
import useWindowSize from "@/hook/WindowSize/useWindowSize";
import HeaderMenu from "./HeaderMenu";
import { categories } from "@/data/product-category/products-category";
import { convertToTree } from "@/ultils/treeParent";
import { useMemo, useState } from "react";
import removeEmptyChildren from "@/ultils/removeEmptyChildren";
import { useRouter } from "next/navigation";
import { buildSlugMap } from "@/ultils/menuUtils";
import { useDispatch } from "react-redux";
import { setCategory } from "@/redux/features/productSlice";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Link href="/login">Đăng nhập</Link>,
  },
  {
    key: "2",
    label: <Link href="/register">Đăng ký</Link>,
  },
];

export default function Header() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [openDrawer, setOpenDrawer] = useState(false);

  const treeData = convertToTree(categories);
  treeData.forEach(removeEmptyChildren);

  treeData.unshift({
    key: "home",
    label: "Trang chủ",
    slug: "/",
  });
  treeData.push(
    { key: "news", label: "Tin tức", slug: "tin-tuc" },
    { key: "contact", label: "Liên hệ", slug: "lien-he" }
  );


  const slugMap = useMemo(() => buildSlugMap(treeData), [treeData]);

  const onClick: MenuProps["onClick"] = ({ key }) => {
    const path = slugMap[key];
    if (!path) {
      console.warn("Không tìm thấy đường dẫn cho key", key);
      return;
    }

    // Các route đặc biệt không cần query
    const noQuery = ["/", "/tin-tuc", "/lien-he"];
    if (noQuery.includes(path)) {
      router.push(path);
    } else {
      router.push(`${path}`);
      dispatch(setCategory(key));
    }
    setOpenDrawer(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onClose = () => {
    setOpenDrawer(false);
  };

  const { width } = useWindowSize();
  return (
    <>
      <div className="flex justify-evenly items-center gap-3 bg-[#1c5b41] h-22 p-4 sm:justify-around">
        <div>
          <Link href="/">
            <Image
              alt="Logo"
              src="https://bizweb.dktcdn.net/100/455/315/themes/894917/assets/logo.png?1724746453440"
              width={153}
              height={40}
              priority
              className="w-[153px] h-[40px]"
            />
          </Link>
        </div>

        {(width ?? 0) > 768 && (
          <div className="!w-1/3 translate-y-1">
            <SearchProduct />
          </div>
        )}

        <div className="flex justify-center items-center gap-3 translate-y-2">
          <Dropdown menu={{ items }} placement="bottomLeft">
            <UserOutlined style={{ fontSize: "26px", color: "#fff" }} />
          </Dropdown>

          <span className="text-white"> | </span>

          <div className="translate-y-1 flex gap-5 items-center">
            <Tooltip title="Gio hang">
              <Badge count={5} size="small">
                <ShoppingCartOutlined
                  style={{
                    fontSize: "26px",
                    color: "#fff",
                  }}
                />
              </Badge>
            </Tooltip>

            {/* Nếu màn nhỏ sẽ cho nó nút menu để show ra (các danh mục) */}
            {(width ?? 0) <= 768 && (
              <>
                <Space>
                  <Button
                    type="primary"
                    onClick={showDrawer}
                    className="!bg-transparent text-[20px]"
                  >
                    <MenuFoldOutlined />
                  </Button>
                </Space>
                <Drawer
                  title="Menu"
                  placement={placement}
                  closable={false}
                  onClose={onClose}
                  open={openDrawer}
                  key={placement}
                >
                  <Menu
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    onClick={onClick}
                    defaultOpenKeys={["sub1"]}
                    style={{ height: "100%" }}
                    items={treeData}
                  />

                  <span
                    className="absolute top-3 right-5 cursor-pointer text-[#000000] text-xl"
                    onClick={onClose}
                  >
                    <CloseOutlined />
                  </span>
                </Drawer>
              </>
            )}
          </div>
        </div>
      </div>

      {(width ?? 0) <= 768 && (
        <div className="p-4">
          <SearchProduct />
        </div>
      )}

      {/* Màn lớn thì để danh mục ở dưới này */}
      {(width ?? 0) > 768 && (
        <div className="flex flex-wrap justify-around items-center border-b bg-[#001529]">
          <div className="ml-[-35px]">
            <HeaderMenu />
          </div>

          <div
            className={`gap-3 text-[#ffffff] justify-center items-center translate-y-[-8px] mt-4 ${
              (width ?? 0) > 1110 ? "flex" : "hidden"
            }`}
          >
            <PhoneOutlined style={{ fontSize: "26px" }} />
            <b>Hotline: 1900 9999</b>
          </div>
        </div>
      )}
    </>
  );
}
