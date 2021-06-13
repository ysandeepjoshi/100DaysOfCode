// arr : num [] containing zero and non zero elements
function moveZeroes(arr){

    // move all the nonZero to front and also keep a count
    let j=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=0){
            arr[j] = arr[i]
            j++;
        }
    }
    for(let i=j;i<arr.length;i++){
        arr[i] = 0
    }
    return arr;

}

console.log(moveZeroes([0,1,2,0,0,3,0,0,0,0,12]))
console.log(moveZeroes([0,1,0,0,0,3,0,12]))
console.log(moveZeroes([0,1,2,0,4,3,0,8]))