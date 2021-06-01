/**
 * You are given a singly linked list and pointer which is pointing to the node
 *  which is required to be deleted. Any information about head pointer or any
 *  other node is not given. You need to write a function to delete that node
 *  from linked list. Your function will take only one argument: pointer to
 *  the node which is to be deleted.
 *
 *
 * Defination of each node is as follows:
struct Node {
    int data;
    struct Node* next;
};

Input : C (a pointer to C)
Output : A-->B-->D-->E-->F

Input : A (a pointer to A)
Output : B-->D-->E-->F
It would be a simple deletion problem from the singly linked list if the head pointer
was given because for deletion you must know the previous node and you can easily reach
there by traversing from the head pointer. Conventional deletion is impossible without
 knowledge of the previous node of a node that needs to be deleted.
The trick here is we can copy the data of the next node to the data field of the current
 node to be deleted. Then we can move one step forward. Now our next has become the
  current node and the current has become the previous node. Now we can easily delete
  the current node by conventional deletion methods.
For example, suppose we need to delete C and a pointer to C is given. If we had a
 pointer to B we could have deleted C easily. But here we will copy the data field
 of D to the data field of C. Then we will move forward. Now we are at D and we have
 a pointer to C i.e. the previous pointer. So we will delete D. That’s how node C
 will be deleted.
 */

 class Node{
     constructor(data){
         this.data = data;
     }
 }

 function deleteThisNode(nodePtr){
    if(nodePtr.next == null){
        nodePtr = null
    }
    else{
        nodePtr.data = nodePtr.next.data
        nodePtr.next = nodePtr.next.next;
        //delete nodePtr.next;
    }

 }
function printList(head){
    while(head!=null){
        console.log(head.data+" ");
        head = head.next
    }
}
 let head = new Node(1);
 head.next = new Node(2);
 head.next.next = new Node(3);
 head.next.next.next = new Node(4);
 head.next.next.next.next = new Node(5);
 head.next.next.next.next.next = new Node(6);
 
 console.log("before deletion")
 printList(head);

 let nodeTobeDeleted = head.next.next;
 deleteThisNode(nodeTobeDeleted)
 
 console.log("after deletion")
 printList(head);