/**
 * Given an array of distinct elements. The task is to find triplets in array 
 * whose sum is equal to a given number. 
 * 
 * Examples: 
 * Input: arr[] = {0, -1, 2, -3, 1}
 *         sum = -2
 * Output:  0 -3  1
 *         -1  2 -3
 * 
 * If we calculate the sum of the output,
 * 0 + (-3) + 1 = -2
 * (-1) + 2 + (-3) = -2
 * 
 * Input: arr[] = {1, -2, 1, 0, 5}
 *        sum = 0
 * Output: 1 -2  1
 * If we calculate the sum of the output,
 * 1 + (-2) + 1 = 0
 
 */

const Arr = [0,-1,2,-3,1]
const sum = -2;

findTriplets(Arr,sum)

function findTriplets(arr,sum){
    arr.sort((a,b)=>a-b)
    for (let i = 0; i < arr.length-1; i++) {
        let left = i+1;
        let right = arr.length-1
        let x =arr[i]
        while(left<right){
            if(x+arr[left]+arr[right] == sum){
                console.log(x+ " "+ arr[left]+" "+arr[right])
                left++;
                right--;
            }

            //if sum of three elements 
            // is less than sum then
            // increment in left
            else if(x+arr[left]+arr[right] <sum){
                left++
            }
            else
            right--;
        }
        
    }
}