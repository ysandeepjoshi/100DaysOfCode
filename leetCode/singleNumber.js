/**
 * given a non empty array of integer every element is twice 
 * find the single/lonely element
 * 
 * the idea here would be to use 
 * 1. use hash table to keep track of all the number and pick the one which has one 
 * occurance
 * 2. better approach is to use XOR of all the number. resultant would be the single number
 */

function findLonelyNumber(inputArr){
    let missingNum = 0;
    inputArr.forEach((num)=>missingNum = missingNum^num);
    return missingNum
}
function findLonelyNumberusingSet(inputArr){
    let set = new Set(inputArr)
    let sum = 0;
    inputArr.forEach((num)=> sum = num+ sum)
    let setSum = [...set].reduce((a,b)=>a+b)

    return setSum*2 - sum
}


console.log(findLonelyNumber([1,2,3,4,3,1,2]))
console.log(findLonelyNumberusingSet([1,2,3,4,3,1,2]))