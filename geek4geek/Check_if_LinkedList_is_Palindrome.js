/**
 * Given a singly linked list of size N of integers. 
 * The task is to check if the given linked list is palindrome or not.
 * Example 1:

Input:
N = 3
value[] = {1,2,1}
Output: 1
Explanation: The given linked list is
1 2 1 , which is a palindrome and
Hence, the output is 1.
Example 2:

Input:
N = 4
value[] = {1,2,3,4}
Output: 0
Explanation: The given linked list
is 1 2 3 4 , which is not a palindrome
and Hence, the output is 0.
Your Task:
The task is to complete the function isPalindrome() 
which takes head as reference as the only parameter and returns true or 
false if linked list is palindrome or not respectively.

Expected Time Complexity: O(N)
Expected Auxialliary Space Usage: O(1)  (ie, you should not use the recursive stack
 space as well)

the optimal solution here would be to reach upto the middle reverse the second half of the
list compare both parts and then reverse the second half to original state.
 */

class Node{
    constructor(data){
        this.data = data;
    }
}
function reverseList(head){
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

function isLinkedListPalindrom(head){
    let isPalindrome = true
    let slowPtr = head;
    let fastPtr = head;
    while(fastPtr.next!=null && fastPtr.next.next!= null){
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
    }
    let newMid = reverseList(slowPtr);
    while(newMid.next!= null && head.next!= null){
        if(newMid.data!=head.data){
            isPalindrome = false
            break;
        }else{
            newMid = newMid.next
            head = head.next
        }
    }

    
    return isPalindrome;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(3);
head.next.next.next.next.next = new Node(2);
head.next.next.next.next.next.next = new Node(1);

/*
let head = new Node(1);
head.next = new Node(1);
head.next.next = new Node(1);
*/
let listIsPalindrome = isLinkedListPalindrom(head)
if(listIsPalindrome){
    console.log("List is Palindrome")
}else{
    console.log("List is not palindrome")
}