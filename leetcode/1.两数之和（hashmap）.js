// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。

var twoSum = function (nums, target) {
    const obj = {};

    for (let i = 0; i < nums.length; i++) {
        // 因为有可能obj[2] = 0，如果不加undefined就有可能错过
        if (obj[target - nums[i]] !== undefined) {
            return [obj[target - nums[i]], i];
        }
        obj[nums[i]] = i;
    }
    return [];
};
// var twoSum = function(nums, target) {
//     const map = new Map();

//     for (let i = 0; i < nums.length; i++) {
//         const subItemIndex = map.get(target - nums[i]);

//         if (subItemIndex !== undefined) {
//             return [subItemIndex, i];
//         }

//         map.set(nums[i], i);
//     }
//     return [];
// };
twoSum([2, 7, 11, 15], 9);

// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。