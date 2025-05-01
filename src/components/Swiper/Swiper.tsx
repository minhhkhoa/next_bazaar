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
  const path = usePathname();
  const trimmedPath = path.replace(/\/[^\/]*$/, "");
  console.log("trimmedPath: ", trimmedPath);

  return (
    <Swiper
      modules={[Navigation]} //- cái này để chuyển slide
      navigation
      spaceBetween={20}
      breakpoints={{
        320: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
      className="mySwiper"
    >
      {data.map((item: ProductsType, index: number) => (
        <SwiperSlide key={index}>
          <Link
            href={`${trimmedPath}/${item.slug}`}
            className="flex flex-col items-center"
          >
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={0}
              height={0}
              sizes="100vw"
              className={`
                object-fill
                w-[120px] h-[120px]
                sm:w-[120px] sm:h-[120px]
                md:w-[180px] md:h-[180px]
                lg:w-[200px] lg:h-[200px]
                xl:w-[220px] xl:h-[220px]
              `}
              priority
            />
            <div className="text-center">{item.title}</div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
