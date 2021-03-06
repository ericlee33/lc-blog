// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let result = Infinity;
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1,
            right = nums.length - 1;
        sum = nums[i] + nums[left] + nums[right];
        while (left < right) {
            let newFiff = Math.abs(sum - target);
            let lastDiff = Math.abs(result - target);
            if (newFiff < lastDiff) {
                ans = sum;
            }
            if (sum > target) {
                right--;
            } else if (sum < target) {
                left++;
            } else {
                return sum;
            }
        }
    }
    return result;
};

// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。