/**
 * each boat carries a certain amount of weight.
 * the max no of people a boat can carry is 2
 * every individual has a weight lower than or equal to limit
 * worst case is that it would take as many boats as many individuals are represented
 * by the array
 * 
 */


function boatsToSavePeople(arr,limit){
    //sort the array first
    arr.sort((a,b)=>a-b)
    let boats_number = 0;
    // use two pointer and keep track of left and right of the array
    let left = 0;
    let right = arr.length -1;

    while(left<=right){
        if(left==right){
            boats_number++;
            break; 
        }
        if(arr[left]+arr[right]<= limit){
            right = right -1
            left = left +1
            boats_number = boats_number +1
        }
        else{
            right = right -1
            boats_number = boats_number +1
        }
    }

    return boats_number
    //return no of boats

}
// time complexity Nlog(N)

console.log(boatsToSavePeople([3,2,1],4))
console.log(boatsToSavePeople([3,3,2,1],3))