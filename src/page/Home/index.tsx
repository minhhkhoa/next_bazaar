import React from "react";
import CarouselCustom from "./components/CarouselCustom";
import banner_iphone from "@public/banner/banner_ip.webp";
import banner_samsung from "@public/banner//banner_ss.jpg";
import banner_serum from "@public/banner/banner_serum.avif";
import banner_fashion_woman from "@public/banner/banner_thoitrangnu.jpg";
import Ballpit from "./components/Ballpit/Ballpit";
import Magnet from "./components/Magnet/Magnet";
import { JavaScriptOutlined } from "@ant-design/icons";
import useWindowSize from "@/hook/WindowSize/useWindowSize";

export default function PageHome() {
  const { width } = useWindowSize();
  console.log('width', width);
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
      {(width ?? 0) <= 768 ? (
        <div className="mx-auto bg-black text-amber-50 h-[150px] flex items-center justify-center">
          <Magnet padding={150} disabled={false} magnetStrength={1}>
            <p className="rounded-lg border-2 border-amber-50 p-2">
              <JavaScriptOutlined />
            </p>
          </Magnet>
        </div>
      ) : (
        <div className="h-[300px] mx-auto">
          <Ballpit />
        </div>
      )}
    </div>
  );
}
