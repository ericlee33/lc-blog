/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//     const obj = {};

//     for (let i = 0; i < nums.length; i++) {
//         // 因为有可能obj[2] = 0，如果不加undefined就有可能错过
//         if (obj[target - nums[i]] !== undefined) {
//             return [obj[target - nums[i]], i];
//         }
//         obj[nums[i]] = i;
//     }
//     return [];
// };
var twoSum = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const subItemIndex = map.get(target - nums[i]);

        if (subItemIndex !== undefined) {
            return [subItemIndex, i];
        }

        map.set(nums[i], i);
    }
    return [];
};
twoSum([2, 7, 11, 15], 9);
