import Image from "next/image";
import React from "react";
import banner_laptop from "@public/banner/banner_laptop.avif"; //- import như này sau khi cấu hình

export default function Laptop() {
  return (
    <>
      {/* Banner */}
      <div>
        <Image
          src={banner_laptop}
          alt="Alena"
          width={0}
          height={0}
          className="w-full h-auto object-cover"
        />
      </div>
      <div></div>
    </>
  );
}
