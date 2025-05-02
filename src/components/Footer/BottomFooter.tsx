"use client";

import useWindowSize from "@/hook/WindowSize/useWindowSize";
import {
  DownOutlined,
  EnvironmentOutlined,
  FieldTimeOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Notifycation from "../Notify/Notifycation";

type Item = { title: string; item: string[] };

const navItems: Item[] = [
  {
    title: "Về chúng tôi",
    item: [
      "Trang chủ",
      "Thời trang nam",
      "Sản phẩm",
      "Bé trai",
      "Bé gái",
      "Tin tức",
      "Liên hệ",
    ],
  },
  {
    title: "Hỗ trợ khách hàng",
    item: [
      "Câu hỏi thường gặp",
      "Hướng dẫn mua hàng",
      "Phương thức thanh toán",
      "Chính sách đổi trả",
      "Chính sách bảo hành",
      "Theo dõi đơn hàng",
      "Liên hệ hỗ trợ",
    ],
  },
  {
    title: "Dịch vụ",
    item: [
      "Tư vấn thời trang",
      "Chăm sóc khách hàng 24/7",
      "Giao hàng tận nơi",
      "Gói quà miễn phí",
      "Đặt hàng theo yêu cầu",
      "Chính sách khách hàng thân thiết",
      "Hỗ trợ đổi/trả nhanh",
    ],
  },
];

export default function BottomFooter() {
  const { width } = useWindowSize();
  return (
    <div className="text-[#AEAEAE]">
      <div className="company flex flex-col px-4">
        <div className="flex flex-col gap-3">
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
          <span className="text-[#fe9614] text-lg">
            Shop thời trang và phụ kiện Alena
          </span>
        </div>

        <div className="flex flex-col gap-3 mt-5">
          <div className="flex items-center gap-5">
            <EnvironmentOutlined
              style={{ fontSize: "30px", color: "#fe9614" }}
            />
            <span>
              Tầng 6, Tòa nhà Ladeco, 266 Đội Cấn, Phường Liễu Giai, Quận Ba
              Đình, TP Hà Nội
            </span>
          </div>
          <div className="flex items-center gap-5">
            <FieldTimeOutlined style={{ fontSize: "30px", color: "#fe9614" }} />
            <span>
              Giờ làm việc: Từ 9:00 đến 22:00 các ngày trong tuần từ Thứ 2 đến
              Chủ nhật
            </span>
          </div>
          <div className="flex gap-5">
            <PhoneOutlined style={{ fontSize: "30px", color: "#fe9614" }} />
            <div className="flex flex-col">
              <span>Hotline</span>
              <b className="text-lg">1900 9999</b>
            </div>
          </div>
        </div>
      </div>

      {(width ?? 0) > 768 ? (
        <div className="about flex flex-wrap px-4 mt-8 gap-8">
          {navItems.map((item: Item, index: number) => (
            <div key={index} className="flex-1 min-w-[200px]">
              <span className="text-[#FFFFFF] text-xl font-bold">
                {item.title}
              </span>
              <ul className="flex flex-col gap-2 mt-5">
                {item.item.map((text, idx) => (
                  <li
                    key={idx}
                    className="transition-colors duration-300 hover:text-[#fe9614] cursor-pointer"
                  >
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div className="px-4 flex flex-col gap-4 mt-8">
          {navItems.map((item: Item, index: number) => {
            const menuItems: MenuProps["items"] = item.item.map(
              (text, idx) => ({
                key: `${index}-${idx}`,
                label: <Notifycation label={text} />,
              })
            );

            return (
              <Dropdown
                key={index}
                menu={{ items: menuItems }}
                trigger={["click"]}
                className="w-full flex"
              >
                <div className="flex justify-between">
                  <a
                    onClick={() => console.log("first")}
                    className="text-white text-lg font-semibold flex items-center gap-2 jj"
                  >
                    {item.title}
                  </a>
                  <DownOutlined />
                </div>
              </Dropdown>
            );
          })}
        </div>
      )}
    </div>
  );
}
