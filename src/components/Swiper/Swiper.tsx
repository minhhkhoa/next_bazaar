"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ProductsType } from "@/dataType/product";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SwiperCustomize({ data }: { data: ProductsType[] }) {
  const path = usePathname().split("/")[1];

  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
    >
      {data.map((item: ProductsType, index: number) => (
        <SwiperSlide key={index}>
          <Link
            href={`/${path}/${item.slug}`}
            className="flex flex-col items-center"
          >
            <Image
              src={item.thumbnail}
              alt="Alena"
              width={0}
              height={0}
              sizes="100vw"
              className="object-fill w-[200px] h-[200px] md:h-[200px] lg:h-[150px]"
              priority
            />
            <div className="text-center">{item.title}</div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
