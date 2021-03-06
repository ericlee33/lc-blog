function bubbleSort(arr) {
    if (arr <= 1) return arr;

    /** 因为要和j + 1比较，所以-1 */
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

console.log(bubbleSort([5, 3, 2, 1, 77, 2, 9]));
