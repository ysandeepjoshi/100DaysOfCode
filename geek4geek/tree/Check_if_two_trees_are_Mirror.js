/**
 * Given two Binary Trees, write a function that returns true
 * if two trees are mirror of each other, else false. For example, 
 * the function should return true for following input trees.
 * 
 *              1                               1
 *            /   \            ===            /   \
 *           3     2                         2     3
 *                /  \                     /  \
 *               5    4                   4    5
 */



class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function areTreeMirror(node1,node2){
    if(node1==null && node2==null) return true;

    if(node1==null || node2==null) return false;
    return (node1.data == node2.data 
        && areTreeMirror(node1.left,node2.right)
        && areTreeMirror(node1.right,node2.left))

}

//construct the trees.
let root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.right = new Node(4);
root1.left.left = new Node(5);


let root2 = new Node(1);
root2.right = new Node(2);
root2.left = new Node(3);
root2.right.left = new Node(4);
root2.right.right = new Node(5);

console.log("Tree are mirror?: "+areTreeMirror(root1,root2))