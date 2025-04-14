import Contact from "../Contact/Contact";
import Partners from "../Contact/Partners";
import BottomFooter from "./BottomFooter";

export default function Footer() {
  return (
    <>
      <div>
        <Partners />
      </div>

      <div>
        <Contact />
      </div>

      <div className="bg-[#000000] p-4">
        <BottomFooter />
      </div>
    </>
  );
}
