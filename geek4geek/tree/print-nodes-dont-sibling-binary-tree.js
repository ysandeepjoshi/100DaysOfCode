/**
 * Given a Binary Tree, print all nodes that don’t have a sibling
 * (a sibling is a node that has same parent. In a Binary Tree, 
 * there can be at most one sibling). Root should not be printed 
 * as root cannot have a sibling.
    For example, the output should be “4 5 6” for the following tree.
            1
          /  \
        2      3
         \     /
          4   5
             /
            6    
*/

class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}
function printSingleNodesIteratively(node) {
    //base case
    if (node == null) return;

    let queue = [];
    queue.push(node);
    let flag = 0;
    let list = []
    //while queue is not empty
    while (queue.length > 0) {
        let tempNode = queue.shift();
        if (tempNode.left != null && tempNode.right == null) {
            flag = 1;
            list.push(tempNode.left.data)
        }
        if (tempNode.left == null && tempNode.right != null) {
            flag = 1;
            list.push(tempNode.right.data)
        }
        if (tempNode.left != null) {
            queue.push(tempNode.left)
        }
        if (tempNode.right != null) {
            queue.push(tempNode.right)
        }
    }
    for (let i = 0; i < list.length; i++) {
        console.log(list[i] + " ")
    }
    if (list.length == 0) {
        console.log("-1")
    }
}

function nodesWithoutSiblings(node) {
    // base case 
    if (node == null) return;

    // If this is an internal node, recur for left
    // and right subtrees
    if (node.left !== null && node.right != null) {
        nodesWithoutSiblings(node.left)
        nodesWithoutSiblings(node.right)
    }
    // If left child is NULL and right is not, print right child
    // and recur for right child
    else if (node.right != null) {
        console.log(node.right.data + " ");
        nodesWithoutSiblings(node.right);
    }
    // If right child is NULL and left is not, print left child
    // and recur for left child
    else if (node.left != null) {
        console.log(node.left.data + " ")
        nodesWithoutSiblings(node.left)
    }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.right = new Node(4);
root.right.left = new Node(5);
root.right.left.left = new Node(6);
root.right.left.left.left = new Node(8);

nodesWithoutSiblings(root);
console.log("----")
printSingleNodesIteratively(root);