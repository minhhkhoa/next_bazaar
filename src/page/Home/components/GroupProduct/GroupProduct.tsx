import { Category } from '@/dataType/product-category';
import React from 'react'
import TabProduct from './TabProduct';
import Image from 'next/image';
import { motion } from "framer-motion";


const GroupProduct = ({
  label,
  dataCategories,
  image,
}: {
  label: string;
  dataCategories?: Category[];
  image: string;
}) => {
  return (
    <div className="flex gap-5">
      {/* block left */}
      <div>
        <span>{label}</span>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          <Image
            src={image}
            alt={"alt"}
            width="0"
            height="0"
            sizes="100vw"
            className=" w-[350px] h-[450px] object-cover rounded-[8px]"
          />
        </motion.div>
      </div>

      {/* block right */}
      <div>
        <TabProduct dataCategories={dataCategories} />
      </div>
    </div>
  );
};

export default GroupProduct