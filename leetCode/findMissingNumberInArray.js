/**
 * in a given array of size N
 * find the number which is missing
 * you may use maths property(Gauss Formula) to solve this
 */



function findMissingNumber(inputArr){
    let size = inputArr.length
    let sumMath = (size*(size+1))/2
    let countSum = 0;
    for (let i = 0; i < inputArr.length; i++) {
        const element = inputArr[i];
        countSum += element;
    }
    return sumMath - countSum;
 
}
console.log(findMissingNumber([0,1,2,3,4,5,6]))