class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()
        let arr = []
        for(let i=0; i<nums.length; i++) {
            let num = target - nums[i]
            if(map.has(num)){
                arr.push(map.get(num))
                arr.push(i)
            }
            map.set(nums[i], i)
        }
        return arr
    }
}
