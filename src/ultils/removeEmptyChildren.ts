import { TreeNode } from "./treeParent";

function removeEmptyChildren(node: TreeNode): void {
  // Nếu node có children thì xử lý đệ quy cho mỗi child
  if (Array.isArray(node.children)) {
    node.children.forEach(removeEmptyChildren);

    // Sau khi xử lý các con, nếu children trống thì xóa thuộc tính này
    if (node.children.length === 0) {
      delete node.children;
    }
  }
}

export default removeEmptyChildren;