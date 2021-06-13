/**
 * find two building or lines which contain most water
 * e.g. [1,8,6,2,5,4,8,3,7]
 * answer to this would be i=1 to i = 8
 */

function findMaximumWater(buildingArr){
    let left = 0;
    let right = buildingArr.length-1;
    let maxArea = 0;
    while(left<right){
        maxArea = Math.max(maxArea,Math.min(buildingArr[left],buildingArr[right])*(right-left))
    
        if(buildingArr[left]< buildingArr[right]){
            left +=1
        }else{
            right -= 1
        }
    
    }
    return maxArea;
}


console.log(findMaximumWater([1,8,6,2,5,4,8,3,7]))