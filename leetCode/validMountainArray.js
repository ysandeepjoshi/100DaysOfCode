/**
 * given an array of intergers return true if following conditions are met
 * length of array should not be less than 3
 * there exist some index such that it has increasing and decreasing sequencing
 * making the array look like mountains.
 * e.g. 0,3,2,1 true
 * 0,1,1,3,4 false
 */


function validMountain(mountainsArr) {
    if(mountainsArr.length<3) return false;
    let i = 1;
    while (i < mountainsArr.length && mountainsArr[i] > mountainsArr[i - 1]) {
        i++
    }
    if (i == 1 || i == mountainsArr.length) {
        return false
    }
    while (i < mountainsArr.length && mountainsArr[i] < mountainsArr[i - 1]) {
        i++
    }

    return i == mountainsArr.length;
}

console.log(validMountain([0, 2, 3, 4, 5, 2, 1]))
console.log(validMountain([5, 2, 3, 4, 5, 2, 1]))