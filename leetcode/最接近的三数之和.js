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
