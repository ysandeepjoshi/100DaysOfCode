/**
 * Given a Binary Tree, print Right view of it. Right view of a Binary Tree is set of nodes visible when tree is visited from Right side. The task is to complete the function RightView(), which accepts root of the tree as argument.

Right view of following tree is 1 3 6 .

          1
       /     \
     2        3
   /     \    /    \
  4     5   7    6
   \
     8   

Example 1:

Input:
   1
 /  \
3    2
Output: 1 3

Example 2:

Input:

Output: 10 20 40
Your Task:
You just have to complete the function RightView() that prints the Right view. The newline is automatically appended by the driver code.
Expected Time Complexity: O(N).
Expected Auxiliary Space: O(Height of the Tree).

Constraints:
0 <= Number of nodes <= 100
1 <= Data of a node <= 1000
 */

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function printRightView(root) {
    if (root == null)
        return
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let queueSize = queue.length;
        for (let i = 1; i <= queueSize; i++) {
            const node = queue.shift();

            if (i == queueSize) {
                console.log(node.data + " ")
            }

            if (node.left != null) {
                queue.push(node.left);
            }

            if (node.right != null) {
                queue.push(node.right);
            }
        }
    }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);
root.right.left = new Node(7);
root.right.right.left = new Node(8);
printRightView(root);

// Time Complexity: O(n), where n is the number of nodes in the binary tree.