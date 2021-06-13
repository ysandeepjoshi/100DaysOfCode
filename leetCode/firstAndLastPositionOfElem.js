/**
 * find the starting and ending position of a given element
 * in a sorted array
 * 
 * 
 * use binary search for better time complexity
 */


function findFirstOccurance(inputArr, target) {
    let left = 0;
    let right = inputArr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (inputArr[mid] == target) {
            if (mid-1>=0 && inputArr[mid - 1] != target || mid == 0 ) {
                return mid
            }
            right = mid - 1
        }
        else if (inputArr[mid] > target) {
            right = mid - 1
        }
        else {
            left = mid + 1
        }
    }


}
function findLastOccurance(inputArr, target) {
    let left = 0;
    let right = inputArr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (inputArr[mid] == target) {
            if (mid == inputArr.length - 1 || inputArr[mid + 1] != target) {
                return mid
            }
            left = mid + 1
        }
        else if (inputArr[mid] > target) {
            right = mid - 1
        }
        else {
            left = mid + 1
        }
    }


}

console.log(findFirstOccurance([10,11,11,11,14,15],11))
console.log(findLastOccurance([10,11,11,11,14,15],11))