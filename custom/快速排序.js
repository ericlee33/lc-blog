function quickSort(arr = []) {
    if (arr.length <= 1) return arr;

    let midIndex = Math.floor(arr.length / 2);

    let pivot = arr.splice(midIndex, 1)[0];

    let left = [],
        right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([5, 3, 2, 1, 77, 2, 9]));
