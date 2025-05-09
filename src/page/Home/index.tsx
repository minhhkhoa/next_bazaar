import React, { useEffect } from "react";
import CarouselCustom from "./components/CarouselCustom";
import banner_iphone from "@public/banner/banner_ip.webp";
import banner_samsung from "@public/banner//banner_ss.jpg";
import banner_serum from "@public/banner/banner_serum.avif";
import banner_fashion_woman from "@public/banner/banner_thoitrangnu.jpg";
import featureProduct from "@public/groupProduct/featureProduct.webp";
import newProduct from "@public/groupProduct/newProduct.webp";
import slaeProducts from "@public/groupProduct/banner_sale.webp";
import Ballpit from "./components/Ballpit/Ballpit";
import Magnet from "./components/Magnet/Magnet";
import { JavaScriptOutlined } from "@ant-design/icons";
import useWindowSize from "@/hook/WindowSize/useWindowSize";
import GroupProduct from "./components/GroupProduct/GroupProduct";
import { getCategoriesBySlug } from "@/api/Products/getCategories";
import { Category } from "@/dataType/product-category";
import SaleProduct from "./components/GroupProduct/SaleProduct";
import { Divider } from "antd";

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

      <div className="w-[30%] mx-auto pt-5">
        <Divider
          style={{
            borderColor: "#fe9614",
            margin: "16px auto",
            borderTopWidth: 3,
          }}
        />
      </div>

      <div className="mt-10 mb-10">
        <GroupProduct
          label="SẢN PHẨM NỔI BẬT"
          image={featureProduct.src}
          dataCategories={dataCategories.productFeatures}
        />
      </div>

      <div className="w-[30%] mx-auto pt-5">
        <Divider
          style={{
            borderColor: "#fe9614",
            margin: "16px auto",
            borderTopWidth: 3,
          }}
        />
      </div>

      <div className="mt-10 w-[100%]">
        <SaleProduct
          label="SALE ĐỒNG GIÁ - ĐỪNG LO VỀ GIÁ"
          banner={slaeProducts.src}
          dataSaleProducts={[]}
        />
      </div>

      <div className="w-[30%] mx-auto pt-5">
        <Divider
          style={{
            borderColor: "#fe9614",
            margin: "16px auto",
            borderTopWidth: 3,
          }}
        />
      </div>

      <div className="mt-10">
        <GroupProduct
          label="SẢN PHẨM MỚI"
          image={newProduct.src}
          dataCategories={dataCategories.productNew}
        />
      </div>

      {(width ?? 0) <= 768 ? (
        <div className="mx-auto bg-black text-amber-50 h-[150px] flex items-center justify-center mb-10 mt-10">
          <Magnet padding={150} disabled={false} magnetStrength={1}>
            <p className="rounded-lg border-2 border-amber-50 p-2">
              <JavaScriptOutlined />
            </p>
          </Magnet>
        </div>
      ) : (
        <div className="h-[300px] mx-auto mb-10">
          <Ballpit />
        </div>
      )}
    </div>
  );
}
