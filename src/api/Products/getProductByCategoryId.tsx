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

export async function filterProductByCategoryId(
  categoryId: string,
  filter: { sort: string; price: Array<number> }
): Promise<ProductsType[] | undefined> {
  if (!categoryId) return undefined;

  const dataProducts = products.filter((item) => {
    const inCategory = item.product_category_id === categoryId;
    const inPriceRange =
      item.price >= filter.price[0] && item.price <= filter.price[1];
    if (!inCategory || !inPriceRange) return false;

    if (filter.sort === "feature") {
      return item.featured === "1";
    }
    // Với các loại sort còn lại (all, price-low-high, price-high-low) => giữ lại tất cả
    return true;
  });

  // 2. Nếu không tìm được sản phẩm nào thì trả về undefined
  if (dataProducts.length === 0) {
    console.warn(`No products found for categoryId: ${categoryId}`);
    return undefined;
  }

  // 3. Sắp xếp theo giá khi cần
  if (filter.sort === "price-low-high") {
    dataProducts.sort((a, b) => a.price - b.price);
  } else if (filter.sort === "price-high-low") {
    dataProducts.sort((a, b) => b.price - a.price);
  }

  return dataProducts;
}

