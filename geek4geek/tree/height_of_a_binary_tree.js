/**
 * Given a binary tree, find its height.
Example 1:

Input:
     1
    /  \
   2    3
Output: 2
Example 2:

Input:
  2
   \
    1
   /
 3
Output: 3   
 */

class Node{
    constructor(data){
        this.data = data;
        this.left =null;
        this.right = null;
    }
}
function getHeight(node){
    if(node==null) return 0;
    return 1+Math.max(getHeight(node.left),getHeight(node.right))
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.right = new Node(4)
root.right.right.right = new Node(5);
console.log("height of tree "+getHeight(root));
console.log("height of tree "+getHeight(root.left));
console.log("height of tree "+getHeight(root.left.left));