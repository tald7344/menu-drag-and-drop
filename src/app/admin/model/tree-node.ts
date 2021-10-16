export interface TreeNode {
  id?: number;
  name?: string;
  link?: string;
  itemId?: string;
  children: TreeNode[];
  isExpanded?: boolean;
}
