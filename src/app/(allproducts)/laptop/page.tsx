'use client';

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

import banner_laptop from "@public/banner/banner_laptop.avif"; //- import như này sau khi cấu hình

export default function Laptop() {
    const searchParams = useSearchParams();
    const categoryId = searchParams.get("categoryId");
    console.log("categoryId: ", categoryId);
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
          src={banner_laptop}
          alt="Alena"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-[160px] md:h-[300px] lg:h-[400px] object-cover"
          priority
        />
      </motion.div>

      <div>

      </div>
    </>
  );
}
