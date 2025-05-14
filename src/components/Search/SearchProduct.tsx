"use client";

import React, { useRef, useState } from "react";
import { Input } from "antd";
import type { GetProps } from "antd";
import "./style.scss";
import { getProductsByTitle } from "@/api/Products/getProductByCategoryId";
import { ProductsType } from "@/dataType/product";
import Suggestions from "./Suggestions";
import { useDispatch } from "react-redux";
import { setFindProducts } from "@/redux/features/productSlice";
import { useRouter } from "next/navigation";
import { getSlugPath } from "@/ultils/getSlugParent";

type SearchProps = GetProps<typeof Input.Search>;
const { Search } = Input;

export default function SearchProduct() {
    const router = useRouter();
  
  const dispatch = useDispatch();
  const [data, setData] = useState<ProductsType[] | undefined>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isHidden, setIsHidden] = useState(false);

  const onSearch: SearchProps["onSearch"] = async (value) => {
    if (!value) {
      dispatch(setFindProducts([]));
      return;
    }
    const res = await getProductsByTitle(value);
    if (res) dispatch(setFindProducts(res));

    const firstResult = res?.[0];
    const path = getSlugPath(firstResult?.product_category_id || "");
    console.log("path", path);
    if(!path) return;
    setIsHidden(true);
    router.push(path);
  };

  const onChange: SearchProps["onChange"] = async (value) => {
    setIsHidden(false);
    const res = await getProductsByTitle(value.currentTarget.value);
    setData(res?.slice(0, 4));
  };
  return (
    <div className="w-full searchProduct relative">
      <Search
        placeholder="Tìm kiếm sản phẩm mong muốn"
        onChange={onChange}
        onSearch={onSearch}
        size="large"
        className="searchProduct"
        enterButton
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={(node: any) => (inputRef.current = node?.input)}
      />
      {data && data.length > 0 && (
        <Suggestions
          isHidden={isHidden}
          setIsHidden={setIsHidden}
          data={data}
          anchorEl={inputRef.current}
        />
      )}
    </div>
  );
}
