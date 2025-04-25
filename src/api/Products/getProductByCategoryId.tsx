import { products } from "@/data/products/products";
import { ProductsType } from "@/dataType/product";

//- giả sử đây sẽ là server NextJs để goin api
export async function getProductsByCategoryId(
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

export async function getProductBySlug(
  slug: string
): Promise<ProductsType[] | undefined> {
  if (!slug) return undefined;
  const dataProduct = products.filter(
    (item: ProductsType) => item.slug === slug
  );

  if (!dataProduct) {
    console.warn("News not found with categoryId:", slug);
    return undefined;
  }

  return dataProduct;
}
