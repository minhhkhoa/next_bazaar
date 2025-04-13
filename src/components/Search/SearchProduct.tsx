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
    <div className="!w-1/3 searchProduct">
      <Search
        placeholder="input search text"
        onSearch={onSearch}
        size="large"
        className="searchProduct"
        enterButton
      />
    </div>
  );
}
