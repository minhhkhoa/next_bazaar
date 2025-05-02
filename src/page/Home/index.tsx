import React from "react";
import CarouselCustom from "./components/CarouselCustom";
import banner_iphone from "@public/banner/banner_ip.webp";
import banner_samsung from "@public/banner//banner_ss.jpg";
import banner_serum from "@public/banner/banner_serum.avif";
import banner_fashion_woman from "@public/banner/banner_thoitrangnu.jpg";



export default function PageHome() {
  const dataCarousel = [
    {
      id: "1",
      thumbnail: banner_iphone.src,
    },
    {
      id: "2",
      thumbnail: banner_samsung.src,
    },
    {
      id: "3",
      thumbnail: banner_serum.src,
    },
    {
      id: "4",
      thumbnail: banner_fashion_woman.src,
    },
  ];
  return (
    <div>
      <div className="w-[95%] mx-auto">
        <CarouselCustom data={dataCarousel ?? []} />
      </div>
      PageHome
    </div>
  );
}
