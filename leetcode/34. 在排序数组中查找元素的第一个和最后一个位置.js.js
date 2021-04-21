/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function (nums, target) {
    let left = 0, right = nums.length - 1
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] > target) {
            right = mid - 1
        } else {
            // 要注意先赋值
            left = mid
            right = mid

            for (let i = mid - 1; i >= 0; i--) {
                if (nums[i] === target) {
                    left --
                } else {
                    break
                }
            }

            for (let i = mid + 1; i < nums.length; i++) {
                if (nums[i] === target) {
                    right ++
                } else {
                    break
                }
            }
            // 提前结束
            return [left, right]
        }
    }
    return [-1, -1]
};
searchRange([5,7,7,8,8,10],8)