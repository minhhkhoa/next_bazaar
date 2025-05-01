import {
  getProductBySlug,
  getProductsByCategoryId,
} from "@/api/Products/getProductByCategoryId";
import { ProductsType } from "@/dataType/product";
import { newPrice } from "@/ultils/newPrice";
import { MinusCircleFilled, PlusCircleFilled } from "@ant-design/icons";
import { Button, Col, Divider, Rate, Row } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import SwiperCustomize from "../Swiper/Swiper";

type mixProductType = {
  productDetail: ProductsType[];
  producsCategory: ProductsType[];
};

export default function ProductDetail({
  slug,
  categoryId,
}: {
  slug: string;
  categoryId: string;
}) {
  const [mixProducts, setMixProducts] = useState<mixProductType>();
  const [number, setNumber] = useState(1);
  const [checkClick, setCheckClick] = useState({
    infoDetail: false,
    material: false,
    evaluate: false,
  });
  const fetchData = useCallback(async () => {
    try {
      const dataProduct = await getProductBySlug(slug ?? "");
      const dataProductsCategory = await getProductsByCategoryId(
        categoryId ?? ""
      );
      if (!dataProduct || !dataProductsCategory) {
        return;
      }

      setMixProducts({
        productDetail: dataProduct,
        producsCategory: dataProductsCategory,
      });
    } catch (error) {
      console.warn("Error:", error);
    }
  }, [slug, categoryId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const newLocal = <PlusCircleFilled style={{ color: "#fe9614" }} />;
  return (
    <>
      <div className="flex flex-col py-5 px-5">
        <Row gutter={[16, 16]} className="flex justify-center gap-5">
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="!w-[95%] mx-auto border-solid border-2 border-[#d2cece] rounded-lg"
            >
              {mixProducts && (
                <Image
                  src={mixProducts?.productDetail[0].thumbnail}
                  alt="Alena"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-[160px] md:h-[300px] lg:h-[500px] object-cover"
                  priority
                />
              )}
            </motion.div>
          </Col>
          <Col>
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl font-bold">
                {mixProducts?.productDetail[0].title}
              </h1>
              <p className="text-[#808080]">
                Mã sản phẩm: {mixProducts?.productDetail[0]._id.$oid}
              </p>
              {/* khối price */}
              <div className="flex gap-5">
                <p className="font-medium text-2xl text-red-500">
                  {mixProducts &&
                    newPrice(
                      mixProducts?.productDetail[0].price,
                      mixProducts?.productDetail[0].discountPercentage
                    )}
                  $
                </p>
                <s className="text-[#808080] transform translate-y-3 text-xl">
                  {mixProducts?.productDetail[0].price}$
                </s>
                <p className="px-4 py-2 bg-green-500 text-white rounded-2xl">
                  Sale
                </p>
              </div>

              {/* khối có icon */}
              <div className="flex flex-col gap-5">
                <div className="flex gap-5">
                  <Image
                    src="https://bizweb.dktcdn.net/100/455/315/themes/894917/assets/iamge_product2.png?1724746453440"
                    alt="Alena"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[50px] h-[50px] object-contain"
                  />

                  <div>
                    <p className="font-bold text-xl">Miễn phí vận chuyển</p>
                    <p>Cho đơn hàng từ 70$</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <Image
                    src="https://bizweb.dktcdn.net/100/455/315/themes/894917/assets/iamge_product1.png?1724746453440"
                    alt="Alena"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[50px] h-[50px] object-contain"
                  />

                  <div>
                    <p className="font-bold text-xl">Miễn phí đổi, sửa hàng</p>
                    <p>
                      Đổi hàng trong 30 ngày kể từ ngày mua Hỗ trợ sửa đồ miễn
                      phí
                    </p>
                  </div>
                </div>
              </div>

              {/* khối input số lượng */}
              <div>
                <p className="font-medium mb-3 text-xl">Số lượng</p>
                <div className="flex gap-3">
                  <button
                    className={`active:bg-yellow-200 font-bold text-2xl border-2 w-[50px] h-[50px] rounded-lg ${
                      number === 0 && "hover:cursor-not-allowed"
                    }`}
                    onClick={() => {
                      if (number > 0) {
                        setNumber(number - 1);
                      }
                    }}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="w-[100px] h-[50px] text-center text-xl border-2 border-[#d2cece] rounded-lg"
                    max={mixProducts?.productDetail[0].stock}
                    min={0}
                    value={number}
                    readOnly
                  />
                  <button
                    className={`active:bg-blue-300 font-bold text-xl border-2 w-[50px] h-[50px] rounded-lg ${
                      number === mixProducts?.productDetail[0].stock &&
                      "hover:cursor-not-allowed"
                    }`}
                    onClick={() => {
                      if (
                        mixProducts &&
                        number < mixProducts?.productDetail[0].stock
                      ) {
                        setNumber(number + 1);
                      }
                    }}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* khối button */}
              <div className="flex gap-5 flex-col">
                <Button
                  size="large"
                  className="!bg-[#05310e] !text-white !text-xl font-medium hover:!bg-[#fe9614] hover:!border-[#fe9614] !p-6"
                >
                  Mua ngay
                </Button>
                <Button
                  size="large"
                  className="!border-[#05310e] !text-[#05310e] !text-xl font-medium hover:!bg-[#fe9614] hover:!border-[#fe9614] hover:!text-white !p-6"
                >
                  Thêm vào giỏ hàng
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        <div className="mt-10">
          <div className="flex flex-col gap-5 lg:px-100">
            <div>
              <div className="flex justify-between items-center">
                <p className="text-2xl w-fit">Thông tin chi tiết sản phẩm</p>
                <p
                  className="text-2xl hover:cursor-pointer"
                  onClick={() => {
                    setCheckClick({
                      ...checkClick,
                      infoDetail: !checkClick.infoDetail,
                    });
                  }}
                >
                  {checkClick.infoDetail ? (
                    <MinusCircleFilled style={{ color: "#fe9614" }} />
                  ) : (
                    <PlusCircleFilled style={{ color: "#fe9614" }} />
                  )}
                </p>
              </div>
              {checkClick.infoDetail && mixProducts && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: mixProducts?.productDetail[0].description,
                  }}
                  className="flex flex-col items-center mt-5 mb-5 mx-3"
                ></div>
              )}
            </div>

            <div>
              <div className="flex justify-between items-center">
                <p className="text-2xl">Chất liệu</p>
                <p
                  className="text-2xl hover:cursor-pointer"
                  onClick={() => {
                    setCheckClick({
                      ...checkClick,
                      material: !checkClick.material,
                    });
                  }}
                >
                  {checkClick.material ? (
                    <MinusCircleFilled style={{ color: "#fe9614" }} />
                  ) : (
                    <PlusCircleFilled style={{ color: "#fe9614" }} />
                  )}
                </p>
              </div>
              {checkClick.material && mixProducts && (
                <div className="flex flex-col items-center mt-5 mb-5 mx-3">
                  Chất liệu xịn yên tâm mua sử dụng!
                </div>
              )}
            </div>

            <div>
              <div className="flex justify-between items-center">
                <p className="text-2xl">Đánh giá sản phẩm</p>
                <p
                  className="text-2xl hover:cursor-pointer"
                  onClick={() => {
                    setCheckClick({
                      ...checkClick,
                      evaluate: !checkClick.evaluate,
                    });
                  }}
                >
                  {checkClick.evaluate ? (
                    <MinusCircleFilled style={{ color: "#fe9614" }} />
                  ) : (
                    <PlusCircleFilled style={{ color: "#fe9614" }} />
                  )}
                </p>
              </div>
              {checkClick.evaluate && mixProducts && (
                <div className="flex flex-col items-center mt-5 mb-5 mx-3">
                  <Rate allowHalf defaultValue={2.5} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Divider />

      <div className="lg:!px-25 mb-10">
        <div className="text-2xl font-bold mb-5 text-[#05310e] px-5">
          Các sản phẩm liên quan
        </div>
        {mixProducts && (
          <SwiperCustomize
            data={mixProducts.producsCategory.filter(
              (item) => item._id.$oid !== mixProducts.productDetail[0]._id.$oid
            )}
          />
        )}
      </div>
    </>
  );
}
