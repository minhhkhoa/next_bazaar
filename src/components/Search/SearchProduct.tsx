"use client";

import React from "react";
import { Input } from "antd";
import type { GetProps } from "antd";
import "./style.scss";

type SearchProps = GetProps<typeof Input.Search>;
const { Search } = Input;

export default function SearchProduct() {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <div className="w-full searchProduct">
      <Search
        placeholder="Tìm kiếm sản phẩm mong muốn"
        onSearch={onSearch}
        size="large"
        className="searchProduct"
        enterButton
      />
    </div>
  );
}
