import { Category } from "@/dataType/product-category";
import React from "react";
import TabProduct from "./TabProduct";
import Image from "next/image";
import { motion } from "framer-motion";
import useWindowSize from "@/hook/WindowSize/useWindowSize";

const GroupProduct = ({
  label,
  dataCategories,
  image,
}: {
  label: string;
  dataCategories?: Category[];
  image: string;
}) => {
  const { width } = useWindowSize();
  return (
    <div className="flex md:flex-row flex-col md:gap-10 gap-5 md:mx-30 mx-5">
      {/* block left */}
      {(width ?? 0) <= 768 ? (
        <span className="text-xl font-bold text-[#1c5b41] px-8 text-center">{label}</span>
      ) : (
        <div className="flex-4">
          <span className="text-3xl font-bold text-[#1c5b41] px-8">
            {label}
          </span>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex items-center justify-center w-full h-full"
          >
            <Image
              src={image}
              alt={"alt"}
              width="0"
              height="0"
              sizes="100vw"
              className=" w-[350px] h-[450px] object-cover rounded-[8px]"
              priority
            />
          </motion.div>
        </div>
      )}

      {/* block right */}
      <div className="flex-8">
        <TabProduct dataCategories={dataCategories} />
      </div>
    </div>
  );
};

export default GroupProduct;
