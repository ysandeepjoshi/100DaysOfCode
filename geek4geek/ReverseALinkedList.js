/**
 * Given a linked list of N nodes. The task is to reverse this list.

Example 1:

Input:
LinkedList: 1->2->3->4->5->6
Output: 6 5 4 3 2 1
Explanation: After reversing the list, 
elements are 6->5->4->3->2->1.
Example 2:

Input:
LinkedList: 2->7->8->9->10
Output: 10 9 8 7 2
Explanation: After reversing the list,
elements are 10->9->8->7->2.
Your Task:
The task is to complete the function reverseList() with head reference as the only argument and should return new head after reversing the list.

Expected Time Complexity: O(N).
Expected Auxiliary Space: O(1).
 */

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function ReverseList(head){
    let prev = null;
    let current = head;
    let next = null;
    while(current!=null){
        next = current.next;
        current.next = prev;
        prev = current
        current = next;
    }
    head = prev;
    return head;
}
function PrintList(head){
    while(head!=null){
        console.log(head.data+"\t" );
        head = head.next;
    }
}

let LinkedList = new Node(1);
LinkedList.next = new Node(2);
LinkedList.next.next = new Node(3);
LinkedList.next.next.next = new Node(4);
LinkedList.next.next.next.next = new Node(5);
LinkedList.next.next.next.next.next = new Node(6);
LinkedList.next.next.next.next.next.next = new Node(7);
PrintList(LinkedList);
console.log("Reversed List \n")
let reverseList = ReverseList(LinkedList);
PrintList(reverseList);

