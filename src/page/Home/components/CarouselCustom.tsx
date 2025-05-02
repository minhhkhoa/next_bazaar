import React from "react";
import { Carousel } from "antd";
import { SwiperCustomizeProps } from "@/components/Swiper/Swiper";
import Image from "next/image";
import { SwiperProps } from "@/components/Swiper/Swiper";


const CarouselCustom: React.FC<SwiperCustomizeProps> = ({
  data,
}: SwiperCustomizeProps) => (
  <>
    <Carousel arrows infinite={false}>
      {data?.map((item: SwiperProps) => (
        <div key={item.id}>
          <Image
            src={item.thumbnail}
            alt="Athena"
            width={0}
            height={0}
            className="w-full h-[160px] md:h-[300px] lg:h-[400px] object-cover rounded-2xl"
            sizes="100vw"
            priority
          />
        </div>
      ))}
    </Carousel>
  </>
);

export default CarouselCustom;
