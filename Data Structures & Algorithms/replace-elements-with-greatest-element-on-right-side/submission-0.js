class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        for(let i=0; i<arr.length-1; i++) {
            let max = -Infinity;
            for(let j = i+1; j<arr.length; j++) {
                max = Math.max(arr[j], max)
            }
            arr[i] = max
        }
            arr[arr.length - 1] = -1
        return arr
        
    }
}
