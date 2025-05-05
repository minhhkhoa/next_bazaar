"use client";

import React from "react";
// @ts-expect-error: Importing Splide components from @splidejs/react-splide causes type errors due to missing type definitions.
import { Splide, SplideSlide, SplideProps } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

import Image from "next/image";
import chanel from "@public/contact/chanel.png";
import dior from "@public/contact/dior.png";
import gucci from "@public/contact/gucci.png";
import prada from "@public/contact/prada.png";
import louis_vuitton from "@public/contact/louis-vuitton.png";

const data = [
  {
    id: 1,
    thumbnail: chanel,
  },
  {
    id: 2,
    thumbnail: dior,
  },
  {
    id: 3,
    thumbnail: gucci,
  },
  {
    id: 4,
    thumbnail: prada,
  },
  {
    id: 5,
    thumbnail: louis_vuitton,
  },
  {
    id: 6,
    thumbnail: chanel,
  },
  {
    id: 7,
    thumbnail: dior,
  },
  {
    id: 8,
    thumbnail: gucci,
  },
  {
    id: 9,
    thumbnail: prada,
  },
  {
    id: 10,
    thumbnail: louis_vuitton,
  },
];

export default function Partners() {
  // Cấu hình Splide với AutoScroll
  const options: SplideProps["options"] = {
    type: "loop",
    perPage: 3,
    gap: "1rem",
    drag: "free",
    focus: "center",
    autoScroll: {
      speed: 0.7,
      pauseOnHover: false,
      pauseOnFocus: false,
      rewind: true,
    },
  };

    return (
      <div className="bg-transparent overflow-hidden h-[210px] md:h-[260px]">
        <div className=""></div>
        <div
          style={{
            color: "#ffffff",
          }}
          className="flex items-center justify-center mt-5"
        >
          <Splide
            options={options}
            extensions={{ AutoScroll }}
            aria-label="AutoScroll Carousel"
            className="mx-auto w-[80%]"
          >
            {data.map((item) => (
              <SplideSlide key={item.id}>
                <Image
                  src={item.thumbnail}
                  alt="Athena"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={`
                object-fill
                w-[120px] h-[120px]
                sm:w-[80px] sm:h-[80px]
                md:w-[80px] md:h-[80px]
                lg:w-[150px] lg:h-[150px]
                xl:w-[180px] xl:h-[180px]
                rounded-[16px]
              `}
                  priority
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    );
}
