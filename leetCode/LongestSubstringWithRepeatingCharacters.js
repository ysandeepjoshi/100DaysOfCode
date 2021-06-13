/**
 * given a substring find the length of the substring which is unique and 
 * doesnt contain any repeating characters
 * 
 * use sliding window approach to solve this.
 */

function longestSubstring(inputString) {
    inputString = inputString.split('')
    let hashMap = {}
    let left = 0;
    let right = 0;
    let ans = 0;
    let lengthOfString = inputString.length;
    while (left < lengthOfString && right < lengthOfString) {
        const elem = inputString[right]
        if (hashMap[elem]) {
            left = Math.max(hashMap[elem] + 1, left)
        } else {
            hashMap[elem] = right
        }
        ans = Math.max(ans, right - left + 1)
        right += 1
    }

    return {
        length: ans,
        result : inputString.slice(left,right).join('')
    }
}

const output = longestSubstring("abaacad");
console.log(`size of the substring ${output.length} and string is ${output.result}`)