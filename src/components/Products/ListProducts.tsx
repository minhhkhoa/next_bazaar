"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ProductsType } from "@/dataType/product";
import { getProductsByCategoryId } from "@/api/Products/getProductByCategoryId";
import { Col, Row } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { newPrice } from "@/ultils/newPrice";

export default function ListProducts({
  banner,
  categoryId,
}: {
  banner: string;
  categoryId: string;
}) {
  const path = usePathname();
  const [data, setData] = useState<ProductsType[] | undefined>([]);

  const fetchData = useCallback(async () => {
    try {
      const dataProducts = await getProductsByCategoryId(categoryId ?? "");
      setData(dataProducts);
    } catch (error) {
      console.warn("Error:", error);
    }
  }, [categoryId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);


  return (
    <>
      {/* Banner */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="!w-[95%] mx-auto"
      >
        <Image
          src={banner}
          alt="Alena"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-[160px] md:h-[300px] lg:h-[400px] object-cover"
          priority
        />
      </motion.div>

      {/* show products */}
      <div className="flex flex-col items-center px-4 py-8">
        <h1 className="text-3xl font-bold my-5 text-[#808080]">
          Các sản phẩm!
        </h1>
        <Row gutter={[24, 24]} className="w-full">
          {data?.map((item: ProductsType, index: number) => (
            <Col
              key={index}
              xs={12}
              sm={12}
              md={8}
              lg={6}
              className="flex justify-center"
            >
              <Link href={`${path}/${item.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 cursor-pointer w-full max-w-[320px] flex flex-col items-center gap-3 p-4 hover:scale-[1.03]"
                >
                  <Image
                    src={item?.thumbnail}
                    alt={item.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-[150px] md:h-[220px] object-contain"
                  />
                  <div className="text-lg font-semibold text-center line-clamp-2">
                    {item.title}
                  </div>
                  <div className="text-orange-600 text-base font-bold">
                    {newPrice(item.price, item.discountPercentage)}$
                  </div>
                </motion.div>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
