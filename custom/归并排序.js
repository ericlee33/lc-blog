// https://www.cnblogs.com/lyt0207/p/12489144.html

// 从左到右，依次排序
function mergeSort(arr) {
    let len = arr.length;
    if (len <= 1) return arr;

    let midIndex = Math.floor(len / 2);

    let left = arr.slice(0, midIndex);
    let right = arr.slice(midIndex);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());

    return result;
}

/** 从左到右，一旦len=1，就立马执行一次merge */
console.log(mergeSort([5, 3, 1, 13, 5, 12, 55, 4]));
