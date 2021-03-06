/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
     let left = 0, right = nums.length - 1
     
     while(left <= right) {
         let mid = Math.floor((left+right) / 2)
         
         if(nums[mid] > target) {
             right = mid - 1
         } else if(nums[mid] < target) {
             left = mid + 1
         } else {
             let res = 1
             let r = mid + 1
             while(r <= nums.length -1) {
                 if(nums[r] === target) {
                     res ++
                     r++
                 } else {
                     break
                 }
             }
             let l = mid - 1

             while(l >= 0) {
                 if(nums[l] === target) {
                     res ++ 
                     l --
                 } else {
                     break
                 }
             }

             return res
         }
     }
     return -1
};
search([5,7,7,8,8,10], 6)