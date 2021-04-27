var findMedianSortedArrays = function (nums1, nums2) {
    let res = 0;
    if (nums1.length === 0 && nums2.length === 0) {
        return 0;
    }

    const nums = [...nums1, ...nums2].sort((a, b) => a - b);

    const mid = Math.floor(nums.length / 2);
    if (nums.length === 1) {
        res = nums[0];
    } else if (nums.length % 2 === 0) {
        res = (nums[mid] + nums[mid- 1]) / 2;
    } else if (nums.length % 2 === 1) {
        res = Math.floor(nums[mid]);
    }

    return res;
};
findMedianSortedArrays([1, 2], [2, 4]);
