'use client'

import Contact from "../Contact/Contact";
import Partners from "../Contact/Partners";
import BottomFooter from "./BottomFooter";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/home";
  return (
    <>
      {isHome && <Partners />}

      <div>
        <Contact />
      </div>

      <div className="bg-[#000000] p-4">
        <BottomFooter />
      </div>
    </>
  );
}
