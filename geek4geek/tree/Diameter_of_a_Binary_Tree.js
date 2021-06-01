/**
 * The diameter of a tree (sometimes called the width) 
 * is the number of nodes on the longest path between 
 * two end nodes. The diagram below shows two trees each 
 * with diameter nine, the leaves that form the ends of 
 * the longest path are shaded (note that there is more 
 * than one path in each tree of length nine, but no 
 * path longer than nine nodes). 
 * 
 * The diameter of a tree T is the largest of the following quantities:
 * the diameter of T’s left subtree.
 * the diameter of T’s right subtree.
 * the longest path between leaves that goes through the root of T 
 * (this can be computed from the heights of the subtrees of T)
 */


class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function getDiameterOfTree(root) {
    if (root == null) return 0;

    //get the height of left and right subtree
    let lHeight = getHeight(root.left);
    let rHeight = getHeight(root.right);


    // get the diameter of left and right subtree
    let lDiameter = getDiameterOfTree(root.left);
    let rDiameter = getDiameterOfTree(root.right);

    //  Return max of following three
    //1) Diameter of left subtree
    //2) Diameter of right subtree
    //3) Height of left subtree + height of right subtree + 1 
    return Math.max(lHeight+rHeight+1,Math.max(lDiameter,rDiameter))       

}
function getHeight(node) {
    if (node == null) return 0;
    return 1 + Math.max(getHeight(node.left), getHeight(node.right))
}

let root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.left.right = new Node(5);
root1.right.left = new Node(6);
let diameter = getDiameterOfTree(root1);
console.log(diameter);