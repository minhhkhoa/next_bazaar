"use client";

import Image from "next/image";
import Link from "next/link";
import SearchProduct from "../Search/SearchProduct";
import type { DrawerProps, MenuProps } from "antd";
import {
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
import { useState } from "react";
import removeEmptyChildren from "@/ultils/removeEmptyChildren";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="/login">
        Đăng nhập
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="/register">
        Đăng ký
      </Link>
    ),
  },
];

export default function Header() {
  const treeData = convertToTree(categories);
  treeData.forEach(removeEmptyChildren);

  console.log(treeData);

  const [open, setOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
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

            {/* Nếu màn nhỏ sẽ xho nó nút menu để show ra (các danh mục) */}
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
                  open={open}
                  key={placement}
                >
                  <Menu
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={["sub1"]}
                    style={{ height: "100%"}}
                    items={treeData}
                  />
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
        <div className="flex flex-wrap justify-around items-center border-b">
          <div className="mr-4">
            <HeaderMenu />
          </div>

          <div
            className={`gap-3 text-[#1c5b41] justify-center items-center translate-y-[-8px] mt-4 ${
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
