/*
Given a binary tree. Check whether it is a BST or not.
Note: We are considering that BSTs can not contain duplicate Nodes.

Example 1:

Input:
    2
 /    \
1      3
Output: 1 
Explanation: 
The left subtree of root node contains node 
with key lesser than the root node’s key and 
the right subtree of root node contains node 
with key greater than the root node’s key.
Hence, the tree is a BST.
Example 2:

Input:
  2
   \
    7
     \
      6
       \
        5
         \
          9
           \
            2
             \
              6
Output: 0 
Explanation: 
Since the node with value 7 has right subtree 
nodes with keys less than 7, this is not a BST.
Your Task:
You don't need to read input or print anything. Your task is to complete the function isBST() which takes the root of the tree as a parameter and returns true if the given binary tree is BST, else returns false. 

Expected Time Complexity: O(N).
Expected Auxiliary Space: O(Height of the BST).

Constraints:
0 <= Number of edges <= 100000


*/
class Node {
    constructor(item) {
        this.data = item;
        this.left = this.right = null;
    }
}
class BinaryTree {
    root = new Node();

    isBSTUtil(node, min, max) {
        /* an empty binary tree*/
        if (node == null) {
            return true;
        }
        if (node.data < min || node.data > max) {
            return false;
        }
        /* otherise check the tree recursiveky
        tightening the min/max constraints */
        return (this.isBSTUtil(node.left, min, node.data - 1)
            && this.isBSTUtil(node.right, node.data + 1, max))
    }

    isBST() {
        return this.isBSTUtil(this.root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
    }
}

const tree = new BinaryTree();
tree.root = new Node(4);

tree.root.left = new Node(2);
tree.root.right = new Node(5);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(3);
if (tree.isBST())
    console.log("IS BST");
else
    console.log("Not a BST");