import React from "react";
import { CircularGallery } from "./CircularGallery";

export default function Partners() {
  return (
    <div className="bg-[#3C3C3C] overflow-hidden h-[260px]">
      <div className="translate-y-[10px]">
        <span className="text-3xl font-bold text-[#fe9614] tracking-wide uppercase ml-4">
          <i>Partners</i>
        </span>
      </div>
      <div
        style={{
          height: "290px",
          position: "relative",
          transform: "translateY(-30px)",
        }}
      >
        <CircularGallery
          items={[
            {
              text: "",
              image: "/contact/chanel.png",
              // text: "Chanel",
            },
            {
              // text: "Gucci",
              text: "",
              image: "/contact/gucci.png",
            },
            {
              // text: "Dior",
              text: "",
              image: "/contact/dior.png",
            },
            {
              // text: "Prada",
              text: "",
              image: "/contact/prada.png",
            },
            {
              // text: "Louis Vuitton",
              text: "",
              image: "/contact/louis-vuitton.png",
            },
          ]}
          bend={0}
          textColor="white"
          borderRadius={0.05}
        />
      </div>
    </div>
  );
}
