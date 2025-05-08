// src/utils/category.ts

import { categories } from "@/data/product-category/products-category";
import { Category } from "@/dataType/product-category";


export function getSlugPath(id: string): string | undefined {
  if (!id) return undefined;

  const cat = categories.find((c: Category) => c._id.$oid === id);
  if (!cat) return undefined;

  // Nếu có cha, gọi đệ quy lấy đường dẫn cha rồi nối thêm slug hiện tại
  if (cat.parent_id) {
    const parentPath = getSlugPath(cat.parent_id);
    // parentPath có thể là "/a/b" hoặc undefined
    return parentPath ? `${parentPath}/${cat.slug}` : `/${cat.slug}`;
  }

  // Nếu là root (không có parent), chỉ cần trả về "/slug"
  return `/${cat.slug}`;
}


export const getKeyCategoryBySlug = (slug: string) => {
  const cat = categories.find((c: Category) => c.slug === slug);
  if (!cat) return undefined;
  return cat._id.$oid;
}