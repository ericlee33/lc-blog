// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 说明：你不能倾斜容器。


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(arr) {
    let left = 0,
        right = arr.length - 1,
        res = 0;

    while (left < right) {
        let leftHeight = arr[left],
            rightHeight = arr[right];

        res = Math.max(res, (right - left) * Math.min(leftHeight, rightHeight));

        if (leftHeight <= rightHeight) {
            left += 1;
        } else {
            right -= 1;
        }
    }

    return res;
};

// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49 
// 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
