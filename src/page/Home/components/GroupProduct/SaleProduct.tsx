import { ProductsType } from "@/dataType/product";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { newPrice } from "@/ultils/newPrice";
import Link from "next/link";
import { Col, Row } from "antd";
import { getProductsByCategoryId } from "@/api/Products/getProductByCategoryId";

const SaleProduct = ({
  label,
  banner,
  dataSaleProducts,
}: {
  label: string;
  banner: string;
  dataSaleProducts: ProductsType[];
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 bg-[#1c5b41] py-5 px-3 md:py-15 md:px-35">
      <span className="md:text-4xl text-2xl text-center font-bold text-white">{label}</span>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex items-center justify-center w-full h-full mx-20"
      >
        <Image
          src={banner}
          alt={"alt"}
          width="0"
          height="0"
          sizes="100vw"
          className="w-[100%] md:h-[450px] h-[250px] object-cover rounded-[8px]"
          priority
        />
      </motion.div>

      <Row gutter={[24, 24]} className="flex-5">
        {dataSaleProducts?.map((item: ProductsType, index: number) => {
          const categoryPath = getProductsByCategoryId(
            item.product_category_id
          );
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
                    {newPrice(item.price, item.discountPercentage)}$
                  </div>
                </motion.div>
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default SaleProduct;
