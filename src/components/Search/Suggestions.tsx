import { createPortal } from "react-dom";
import React, { useEffect, useState } from "react";
import { ProductsType } from "@/dataType/product";
import Link from "next/link";
import { getSlugPath } from "@/ultils/getSlugParent";

interface SuggestionsProps {
  data: ProductsType[];
  anchorEl: HTMLElement | null;
  isHidden?: boolean;
  setIsHidden?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Suggestions: React.FC<SuggestionsProps> = ({
  data,
  anchorEl,
  isHidden,
  setIsHidden,
}) => {
  const [pos, setPos] = useState<{ top: number; left: number; width: number }>({
    top: 0,
    left: 0,
    width: 0,
  });

  useEffect(() => {
    if (anchorEl) {
      const rect = anchorEl.getBoundingClientRect();
      setPos({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [anchorEl, data]);

  if (!anchorEl) return null;

  return createPortal(
    <div
      style={{
        position: "absolute",
        top: pos.top,
        left: pos.left,
        width: pos.width,
        background: "white",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        zIndex: 9999,
      }}
      className={isHidden ? "hidden" : ""}
    >
      {data.map((item: ProductsType, i) => {
        const path = getSlugPath(item.product_category_id);
        return (
          <div key={i} className="p-2 hover:bg-gray-100 cursor-pointer">
            <Link
              href={`${path}/${item.slug}`}
              onClick={() => setIsHidden && setIsHidden(true)}
            >
              {item.title}
            </Link>
          </div>
        );
      })}
    </div>,
    document.body
  );
};

export default Suggestions;
