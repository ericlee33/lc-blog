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
