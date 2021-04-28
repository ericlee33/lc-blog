// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

/**
 * @param {number[]} height
 * @return {number}
 */
// 每一次移动，记录左右各自的最大高度，并且再次缩小指针范围的时候，比较当前与此侧最大高度的差值，累加到res中
// 边界条件为 left < right

var trap = function(arr) {
    let left = 0,
        right = arr.length - 1,
        res = 0,
        leftHeightMax = 0,
        rightHeightMax = 0;
    while (left < right) {
        let leftHeight = arr[left],
            rightHeight = arr[right];

        if (leftHeight <= rightHeight) {
            if (leftHeight < leftHeightMax) {
                res += leftHeightMax - leftHeight;
            } else {
                leftHeightMax = leftHeight;
            }
            left += 1;
        } else {
            if (rightHeight < rightHeightMax) {
                res += rightHeightMax - rightHeight;
            } else {
                rightHeightMax = rightHeight;
            }
            right -= 1;
        }
    }
    return res;
};

// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6
// 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/trapping-rain-water
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。