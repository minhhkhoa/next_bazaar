export type TreeItem = {
  key: string;
  slug: string;
  children?: TreeItem[];
};

/**
 * Xây dựng map từ key → full slug path cho menu tree
 * @param items Mảng treeData với các node { key, slug, children }
 * @returns Record<key, fullPath> ví dụ { "as": "/tho-trang/as", ... }
 */
export function buildSlugMap(items: TreeItem[]): Record<string, string> {
  const map: Record<string, string> = {};

  function dfs(list: TreeItem[], parentPath = "") {
    list.forEach((item) => {
      // Nếu slug là "/" (như home), giữ nguyên
      const path =
        item.slug === "/"
          ? "/"
          : parentPath === "/"
          ? `/${item.slug}`
          : parentPath
          ? `${parentPath}/${item.slug}`
          : `/${item.slug}`;

      map[item.key] = path;

      if (item.children) {
        dfs(item.children, path);
      }
    });
  }

  dfs(items);
  return map;
}
