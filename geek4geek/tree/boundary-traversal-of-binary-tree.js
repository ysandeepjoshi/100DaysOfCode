/**
 * Given a binary tree, print boundary nodes of the binary tree Anti-Clockwise 
 * starting from the root. The boundary includes left boundary, leaves, and 
 * right boundary in order without duplicate nodes. (The values of the nodes may 
 * still be duplicates.) 
 * 
 * The left boundary is defined as the path from the root to the left-most node. 
 * The right boundary is defined as the path from the root to the right-most node. 
 * If the root doesn’t have left subtree or right subtree, then the root itself is 
 * left boundary or right boundary. Note this definition only applies to the input 
 * binary tree, and not apply to any subtrees.
 * 
 * The left-most node is defined as a leaf node you could reach when you always 
 * firstly travel to the left subtree if it exists. If not, travel to the right subtree. 
 * Repeat until you reach a leaf node. 
 * 
 * The right-most node is also defined in the same way with left and right exchanged.
 * For example, boundary traversal of the following tree is "20 8 4 10 14 25 22"
 * 
 *                               20
 *                             /    \
 *                            8      22
 *                          /   \      \
 *                         4    12      25
 *                             /  \
 *                           10    14
 */


class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
function printLeaves(node){
    if(node == null) return;
    printLeaves(node.left)
    if(node.left == null && node.right == null){
        console.log(node.data)
    }
    printLeaves(node.right)
}

function pritnLeftBoundary(node){
    if(node == null) return;
    if(node.left != null){
        //to ensure top down order print the node before calling
        // itself for left tree
        console.log(node.data+ " ")
        pritnLeftBoundary(node.left)
    }
    else if(node.right != null){
        console.log(node.data+ " ")
        pritnLeftBoundary(node.right)    
    }
    //do nothing if it is a leaf
}

function printRightBoundary(node){
    if(node == null) return;
    if(node.right != null){
        //to ensure top down order print the node before calling
        // itself for left tree
        pritnLeftBoundary(node.right)
        console.log(node.data+ " ")
    }
    else if(node.left != null){        
        pritnLeftBoundary(node.left) 
        console.log(node.data+ " ")   
    }
    //do nothing if it is a leaf
}
function treeBoundaryTraversal(node){
    if(node==null) return;
    console.log(node.data);

    //print the left boundary in top down way
    pritnLeftBoundary(node.left);
    printLeaves(node.left);
    printLeaves(node.right);
    printRightBoundary(node.right);
}

let root = new Node(20);
root.left = new Node(8);
root.right = new Node(22);
root.left.left = new Node(4);
root.left.right = new Node(12);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);
root.right.right = new Node(25);

treeBoundaryTraversal(root);