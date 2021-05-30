/**
 *You are given a linked list of N nodes. Remove the loop from the linked list, if present. 
Note: X is the position of the node to which the last node is connected to. If it is 0, then there is no loop.

Example 1:

Input:
N = 3
value[] = {1,3,4}
X = 2
Output: 1
Explanation: The link list looks like
1 -> 3 -> 4
     ^    |
     |____|    
A loop is present. If you remove it 
successfully, the answer will be 1. 
â€‹
Example 2:

Input:
N = 4
value[] = {1,8,3,4}
X = 0
Output: 1
Explanation: The Linked list does not 
contains any loop. 

Your Task:
You don't need to read input or print anything. Your task is to complete the function removeLoop() which takes the head of the linked list as input parameter. Simply remove the loop in the list (if present) without disconnecting any nodes from the list. The driver code will print 1 if your code is correct.


Expected time complexity : O(n)
Expected auxiliary space : O(1)
 * 
 */

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
function detectAndRemoveLoop(head){
    if(head==null || head.next == null)
    return;
    let slow = fast = head;

    slow = slow.next;
    fast = fast.next.next
    while(fast!=null && fast.next!=null){
        if(slow==fast)
        break;
        slow = slow.next;
        fast = fast.next.next;
    }
    if(slow==fast){
        slow = head;
        if(slow!=fast){
            while(slow.next != fast.next){
                slow = slow.next;
                fast = fast.next;
            }
            // since fast.next is the looping point
            fast.next = null // remove loop
        }
        // else if fast and slow pointer meet at first position
        else{
            while(fast.next != slow){
                fast = fast.next;
            }
            fast.next = null;
        }
    }

}
function printList(head){
    while(head.next!=null){
        console.log(head.data+ "\n");
        head = head.next;
        
    }
}

let head = new Node(50);
head.next = new Node(20);
head.next.next = new Node(15);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(10);
// creating a loop
head.next.next.next.next.next = head.next.next.next;
detectAndRemoveLoop(head)
printList(head);