"use client";

import Image from "next/image";
import Link from "next/link";
import SearchProduct from "../Search/SearchProduct";
import type { MenuProps } from "antd";
import {
  PhoneOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge, Tooltip, Dropdown } from "antd";
import useWindowSize from "@/hook/WindowSize/useWindowSize";
import HeaderMenu from "./HeaderMenu";

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

          <div className="translate-y-1">
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
          </div>
        </div>
      </div>
      {(width ?? 0) <= 768 && (
        <div className="p-4">
          <SearchProduct />
        </div>
      )}

      <div className="flex justify-center items-center border-b-1 border-[#4d5250]">
        <div className="flex-2 ml-8">
          <HeaderMenu />
        </div>
        <div className="flex flex-1 gap-3 text-[#1c5b41]">
          |
          <PhoneOutlined />
          <b>Hotline: 1900 9999</b>
        </div>
      </div>
    </>
  );
}
