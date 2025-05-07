import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { Category } from "@/dataType/product-category";
import { ProductsType } from "@/dataType/product";
import { getProductsByCategoryId } from "@/api/Products/getProductByCategoryId";
import type { TabsType } from "antd/lib/tabs";

interface TabProductProps {
  dataCategories?: Category[];
}

const TabProduct: React.FC<TabProductProps> = ({ dataCategories }) => {
  // 1. Khởi tạo state đúng kiểu: mảng items của Antd Tabs
  const [tabsItems, setTabsItems] = useState<TabsProps["items"]>([]);

  useEffect(() => {
    // 2. Nếu chưa có dataCategories thì thôi
    if (!dataCategories || dataCategories.length === 0) {
      setTabsItems([]);
      return;
    }

    // 3. Fetch toàn bộ rồi mới set state
    const fetchAll = async () => {
      try {
        // Dùng Promise.all để đảm bảo thứ tự giống dataCategories
        const items = await Promise.all(
          dataCategories.map(async (cat) => {
            const products: ProductsType[] | undefined =
              await getProductsByCategoryId(cat._id.$oid);
            if (products) {
              return {
                key: cat._id.$oid,
                label: cat.title,
                children: (
                  <div>
                    {products.map((p) => (
                      <div key={p._id.$oid /* hoặc _id */}>
                        <h4>{p.title}</h4>
                        <p>{p.price}</p>
                      </div>
                    ))}
                  </div>
                ),
              } as TabsProps["items"] extends TabsType[]
                ? TabsProps["items"][number]
                : never; //-chỉ định rằng phần tử tại vị trí number trong mảng items có kiểu dữ liệu là Tab.
            } else {
              // Xử lý trường hợp không tìm thấy sản phẩm nào
              return {
                key: cat._id.$oid,
                label: cat.title,
                children: <div>Không tìm thấy sản phẩm nào</div>,
              } as TabsProps["items"] extends TabsType[]
                ? TabsProps["items"][number]
                : never;
            }
          })
        );

        setTabsItems(items);
      } catch (error) {
        console.error("Error fetching products for tabs:", error);
      }
    };

    fetchAll();
  }, [dataCategories]);

  console.log("tabsItems", tabsItems);

  return (
    <Tabs
      items={tabsItems}
    />
  );
};

export default TabProduct;
