import { products } from "@/data/products/products";
import { ProductsType } from "@/dataType/product";

//- giả sử đây sẽ là server NextJs để goin api
export async function getProductByCategoryId(
  categoryId: string
): Promise<ProductsType[] | undefined> {
  if (!categoryId) return undefined;
  const dataProducts = products.filter(
    (item: ProductsType) => item.product_category_id === categoryId
  );

  if (!dataProducts) {
    console.warn("News not found with categoryId:", categoryId);
    return undefined;
  }

  return dataProducts;
}
