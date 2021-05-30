/**
 * Given a singly linked list of size N. The task is to rotate the linked list counter-clockwise by k nodes, where k is a given positive integer smaller than or equal to length of the linked list.

Example 1:

Input:
N = 5
value[] = {2, 4, 7, 8, 9}
k = 3
Output: 8 9 2 4 7
Explanation:
Rotate 1: 4 -> 7 -> 8 -> 9 -> 2
Rotate 2: 7 -> 8 -> 9 -> 2 -> 4
Rotate 3: 8 -> 9 -> 2 -> 4 -> 7
Example 2:

Input:
N = 8
value[] = {1, 2, 3, 4, 5, 6, 7, 8}
k = 4
Output: 5 6 7 8 1 2 3 4
 

Your Task:
You don't need to read input or print anything. Your task is to complete the function rotate() which takes a head reference as the first argument and k as the second argument, and returns the head of the rotated linked list.

Expected Time Complexity: O(N).
Expected Auxiliary Space: O(1).
 */

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
function printList(head){
    while(head!= null){
        console.log(head.data+'\t')
        head = head.next;
    }
}
function rotateLinkedList(head,k){ // k is the location from where we rotate
    if(k==0) return head;
    let current = head;
    for (let i = 1; i < k; i++){
         current = current.next;
    }
    if(current==null) return head;
    kthNode = current;
    while(current.next!= null){
        current = current.next;
    } 
    current.next = head;
    head = kthNode.next;
    kthNode.next = null;
    return head;

}


let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
console.log("before rotation");
printList(head);
let newHead = rotateLinkedList(head,3);
console.log("before rotation");
printList(newHead);