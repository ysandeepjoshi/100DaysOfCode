/**
 * print a given tree on level order basis. make sure that the order of printing
 * toggles at each level.
 */


class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
function getHeight(node){
    if(node==null) return 0;
    return 1+ Math.max(getHeight(node.left),getHeight(node.right))
}
function printSpiralTraversal(node){
    const height = getHeight(node);
    // ltr -> left to right. if this is set then traverse left to right
    let ltr = false;
    for (let i = 1; i <= height; i++) {
        printLevel(node,i,ltr)
        ltr = !ltr
        
    }
}

function printLevel(node,level,ltr){
    if(node== null) return;
    if(level == 1){
        console.log(node.data+" ")
    }
    else if(level>1){
        if(ltr!= false){
            printLevel(node.left,level-1,ltr)
            printLevel(node.right,level-1,ltr)
        }
        else{
            printLevel(node.right,level-1,ltr)
            printLevel(node.left,level-1,ltr)
        }
    }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.left.left.left = new Node(8);
root.left.right.right = new Node(9);
/**
 *                1
 *             /    \
 *            2      3 
 *           / \    / \   
 *          4  5   6   7
 *         /    \ 
 *        8      9     
 *      1->2->3->7->6->5->4->8->9
 */

printSpiralTraversal(root);