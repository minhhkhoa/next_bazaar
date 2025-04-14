// Chuyển đổi danh sách danh mục thành dạng cây

import { Category } from "@/dataType/product-category";

interface TreeNode {
  key: string | number;
  label: string;
  slug: string;
  children: TreeNode[];
}
export const convertToTree = (categories: Category[]): TreeNode[] => {
  const map: { [key: string]: TreeNode } = {};
  const tree: TreeNode[] = [];

  categories.forEach((item) => {
    const id = item._id.$oid;
    map[id] = {
      key: id,
      label: item.title,
      children: [],
      slug: item.slug,
    };
  });

  categories.forEach((item) => {
    const id = item._id.$oid;
    if (item.parent_id) {
      if (map[item.parent_id]) {
        map[item.parent_id].children.push(map[id]);
      } else {
        tree.push(map[id]);
      }
    } else {
      tree.push(map[id]);
    }
  });

  return tree;
};

