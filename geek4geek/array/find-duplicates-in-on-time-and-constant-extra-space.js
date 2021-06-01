/**
 * Given an array of n elements that contains elements from 0 to n-1, 
 * with any of these numbers appearing any number of times. 
 * Find these repeating numbers in O(n) and using only constant memory space.
 */

function printDuplicates(arr){
    for (let i = 0; i < arr.length; i++) {
        const j = Math.abs(arr[i]);
        if(arr[j]>=0){
            arr[j] = -arr[j]
        }
        else{
            console.log(j+" ")
        }
        
    }
}

let arr = [1,3,1,3,6,6,2,5]
printDuplicates(arr);
console.log("------")