import React, { useEffect, useState } from "react";
import { Col, Row, Tabs } from "antd";
import type { TabsProps } from "antd";
import { Category } from "@/dataType/product-category";
import { ProductsType } from "@/dataType/product";
import { getProductsByCategoryId } from "@/api/Products/getProductByCategoryId";
import type { TabsType } from "antd/lib/tabs";
import Link from "next/link";
import { motion } from "framer-motion";
import { newPrice } from "@/ultils/newPrice";
import Image from "next/image";
import { getSlugPath } from "@/ultils/getSlugParent";
import "./styleTab.scss";


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
              //- lấy đường dẫn của category trên trang chủ
              const categoryPath = getSlugPath(cat._id.$oid);
              return {
                key: cat._id.$oid,
                label: cat.title,
                children: (
                  <Row gutter={[24, 24]} className="flex-5">
                    {products
                      .slice(0, 6)
                      ?.map((item: ProductsType, index: number) => {
                        return (
                          <Col
                            key={index}
                            xs={8}
                            sm={8}
                            md={8}
                            lg={6}
                            className="flex justify-center"
                          >
                            <Link href={`${categoryPath}/${item.slug}`}>
                              <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                  duration: 0.4,
                                  delay: index * 0.05,
                                }}
                                className="
                            bg-white rounded-xl overflow-hidden shadow hover:shadow-lg
                              transition-all duration-300 cursor-pointer
                              max-w-[320px]
                              h-[200px]              
                              flex flex-col   
                              w-[100px]
                              sm:w-[160px]
                              md:w-[180px]
                            "
                              >
                                <div className="flex-1 w-full flex items-center justify-center">
                                  <Image
                                    src={item.thumbnail}
                                    alt={item.title}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="max-h-[100px] w-auto object-contain"
                                    priority
                                  />
                                </div>
                                <div className="px-4 text-sm font-semibold text-center line-clamp-2">
                                  {item.title}
                                </div>
                                <div className="px-4 pb-3 text-orange-600 text-base font-bold text-center">
                                  {newPrice(
                                    item.price,
                                    item.discountPercentage
                                  )}
                                  $
                                </div>
                              </motion.div>
                            </Link>
                          </Col>
                        );
                      })}
                  </Row>
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

  return <Tabs items={tabsItems} />;
};

export default TabProduct;
