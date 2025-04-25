import {
  getProductBySlug,
  getProductsByCategoryId,
} from "@/api/Products/getProductByCategoryId";
import { ProductsType } from "@/dataType/product";
import React, { useCallback, useEffect, useState } from "react";

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

  console.log("mixProducts: ", mixProducts);

  return (
    <div>
      ProductDetail with {slug} - {categoryId}
    </div>
  );
}
