'use client';

import React from 'react'
import { Input } from "antd";
import type { GetProps } from "antd";
type SearchProps = GetProps<typeof Input.Search>;
const { Search } = Input;

export default function InfoContact() {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly gap-5 bg-[#fe9614] p-4 md:h-20">
      <span className="md:text-xl font-bold text-[#fff] text-center">
        NHẬP THÔNG TIN KHUYẾN MÃI TỪ CHÚNG TÔI
      </span>

      <Search
        placeholder="Nhập email của bạn"
        onSearch={onSearch}
        size="large"
        enterButton={
          <button className="bg-[#333] text-white h-10 w-14 rounded-lg translate-x-[-10px]">
            Gửi
          </button>
        }
        style={{ width: 360 }}
      />
    </div>
  );
}
