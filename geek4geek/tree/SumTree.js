/**
 * Given a Binary Tree. Return true if, for every node X in 
 * the tree other than the leaves, its value is equal to 
 * the sum of its left subtree's value and its right
 * subtree's value. Else return false.
 * 
 * An empty tree is also a Sum Tree as the sum of an empty tree 
 * can be considered to be 0. A leaf node is also considered a Sum Tree.
 * 
 * Example 1:

Input:
    3
  /   \    
 1     2

Output: 1
Explanation: The sum of left subtree and right subtree
is 1 + 2 = 3, which is the value of the root node.
Therefore,the given binary tree is a sum tree.

Example 2:

Input:

          10
        /    \
      20      30
    /   \ 
   10    10

Output: 0
Explanation: The given tree is not a sum
tree. For the root node, sum of elements
in left subtree is 40 and sum of elements
in right subtree is 30. Root element = 10
which is not equal to 30+40.


Expected Time Complexity: O(N)
Expected Auxiliary Space: O(Height of the Tree)
 */


class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
function getSum(node){
    if(node==null) return 0;
    return getSum(node.left)+node.data+getSum(node.right);
}

function isSumTree(node){
        if(node==null || node.left == null || node.right == null) return true;


        //get sum of left and right subtree
        const leftSum = getSum(node.left);
        const rightSum = getSum(node.right);

        //if the node and both its children satisfy the property
        //return true else false
        if((node.data == leftSum+rightSum) 
        && isSumTree(node.left)
        && isSumTree(node.right)){
            return true;
        }


        return false;

}

let root = new Node(26);
root.left = new Node(10);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(6);
root.right.right = new Node(3);

console.log("is given tree a sum tree: "+isSumTree(root))

