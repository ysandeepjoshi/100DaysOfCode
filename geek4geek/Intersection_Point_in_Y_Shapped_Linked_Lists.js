/**
 * Given two singly linked lists of size N and M, write a program to get the point where two linked lists intersect each other.

 

Example 1:

Input:
LinkList1 = 3->6->9->common
LinkList2 = 10->common
common = 15->30->NULL
Output: 15
Example 2:

Input: 
Linked List 1 = 4->1->common
Linked List 2 = 5->6->1->common
common = 8->4->5->NULL
Output: 8
Explanation: 

4              5
|              |
1              6
 \             /
  8   -----  1 
   |
   4
   |
  5
  |
  NULL       
Your Task:
You don't need to read input or print anything. The task is to complete the function 
intersetPoint() which takes the pointer to the head of linklist1(head1) and 
linklist2(head2) as input parameters and returns data value of a node where
 two linked lists intersect. If linked list do not merge at any point,
 then it should return -1.
Challenge : Try to solve the problem without using any extra space.

 

Expected Time Complexity: O(N+M)
Expected Auxiliary Space: O(1)
 */
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function detectIntersectionNode(head1,head2){
    if(head1==null || head2==null) return -1;
    let count1 = 0,count2 = 0
    let current = head1
    while(current!=null){
        current = current.next;
        count1++
    }
    current = head2;
    while(current!=null){
        current = current.next;
        count2++
    }
    let diff = Math.abs(count1-count2)
    if(count1>count2){
        for (let i = 0; i < diff; i++) {
           head1 = head1.next
        }
    }
    else{
        for (let i = 0; i < diff; i++) {
            head2 = head2.next
         }
    }
    while(head1.data!=head2.data && head1!=null && head2!=null){
        head1 = head1.next;
        head2 = head2.next;
    }
    if(head1!=null && head2!=null)
    return head1.data;
    else return -1
}

let head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);
head1.next.next.next = new Node(4);
head1.next.next.next.next = new Node(5);
head1.next.next.next.next.next = new Node(6);



let head2 = new Node(-1);
head2.next = new Node(0);
head2.next.next = new Node(5);
head2.next.next.next = new Node(6);

let data = detectIntersectionNode(head1,head2);
if(data == -1){
    console.log("No intersection detected")
}
else{
    console.log("Intersection detected at "+ data)
}