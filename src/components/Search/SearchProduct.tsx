"use client";

import React from "react";
import { Input } from "antd";
import type { GetProps } from "antd";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

export default function SearchProduct() {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);
  return (
    <div className="!w-1/3 SearchProduct">
      <Search
        placeholder="input search text"
        onSearch={onSearch}
        enterButton
        size="large"
      />
    </div>
  );
}
