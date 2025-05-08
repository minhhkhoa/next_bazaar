import React, { useEffect } from "react";
import CarouselCustom from "./components/CarouselCustom";
import banner_iphone from "@public/banner/banner_ip.webp";
import banner_samsung from "@public/banner//banner_ss.jpg";
import banner_serum from "@public/banner/banner_serum.avif";
import banner_fashion_woman from "@public/banner/banner_thoitrangnu.jpg";
import featureProduct from "@public/groupProduct/featureProduct.webp";
import newProduct from "@public/groupProduct/newProduct.webp";
import Ballpit from "./components/Ballpit/Ballpit";
import Magnet from "./components/Magnet/Magnet";
import { JavaScriptOutlined } from "@ant-design/icons";
import useWindowSize from "@/hook/WindowSize/useWindowSize";
import GroupProduct from "./components/GroupProduct/GroupProduct";
import { getCategoriesBySlug } from "@/api/Products/getCategories";
import { Category } from "@/dataType/product-category";

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

export default function PageHome() {
  const { width } = useWindowSize();
  const [dataCategories, setDataCategories] = React.useState<{
    productFeatures: Category[]; //- định nghĩa dữ liệu sẽ là mảng của Category
    productNew: Category[];
  }>({
    productFeatures: [],
    productNew: [],
  });


  const getDataCategories = async () => {
    try {
      const categoryFeature = await getCategoriesBySlug([
        "iphone",
        "thoi-trang-nu",
        "serum",
        "perfume",
        "laptop",
      ]);
      const categoryNew = await getCategoriesBySlug([
        "laptop",
        "quan-ao-nam",
        "perfume",
      ]);

      if (!categoryFeature || !categoryNew) {
        throw new Error("Failed to fetch data");
      }

      setDataCategories((prev) => ({
        ...prev,
        productNew: categoryNew,
        productFeatures: categoryFeature,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getDataCategories();
  }, []);

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
      <div className="mt-10">
        <GroupProduct
          label="Sản phẩm nổi bật"
          image={featureProduct.src}
          dataCategories={dataCategories.productFeatures}
        />
      </div>
      <div className="mt-20 mb-10">
        <GroupProduct
          label="Sản phẩm mới"
          image={newProduct.src}
          dataCategories={dataCategories.productNew}
        />
      </div>
    </div>
  );
}
