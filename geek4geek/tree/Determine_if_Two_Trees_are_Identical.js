/**
 * Two trees are identical when they have same data and arrangement of data is also same.
To identify if two trees are identical, we need to traverse both trees simultaneously,
 and while traversing we need to compare data and children of the trees.

 Algorithm:

sameTree(tree1, tree2)
1. If both trees are empty then return 1.
2. Else If both trees are non -empty
     (a) Check data of the root nodes (tree1->data ==  tree2->data)
     (b) Check left subtrees recursively  i.e., call sameTree( 
          tree1->left_subtree, tree2->left_subtree)
     (c) Check right subtrees recursively  i.e., call sameTree( 
          tree1->right_subtree, tree2->right_subtree)
     (d) If a,b and c are true then return 1.
3  Else return 0 (one is empty and other is not)
 */

class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function checkTreeIdentical(root1,root2){
    if(root1 == null && root2 == null){
        return true
    }
    if(root1!= null && root2 != null){
        return (root1.data == root2.data 
        && checkTreeIdentical(root1.left,root2.left)
        && checkTreeIdentical(root1.right,root2.right))
    }
    return false;
}

let root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.left.right = new Node(5);
root1.right.left = new Node(6);


let root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);
root2.left.left = new Node(4);
root2.left.right = new Node(5);
root2.right.left = new Node(7);

let isIdentical = checkTreeIdentical(root1,root2)
if(isIdentical){
    console.log("Trees are identical")
}else{
    console.log("Trees are not identical")
}