import { categories } from "@/data/product-category/products-category";
import { Category } from "@/dataType/product-category";

export const getCategoriesBySlug = async (slug: Array<string>) => {
  const dataCategories = categories.filter((item: Category) => slug.includes(item.slug));

  return dataCategories;
};