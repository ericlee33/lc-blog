function calc(arr) {
    const SIGNS = ['+', '-', '*', '/'];
    const HIGH_SIGNS = ['*', '/'];

    const signs = [];
    const nums = [];

    for (let i = 0; i < arr.length; i++) {
        if (SIGNS.includes(arr[i])) {
            let s = arr[i];
            if (HIGH_SIGNS.includes(arr[i])) {
                let n1 = arr[i];
                let n2 = arr[++i];
            }
        } else {
            nums.push(arr[i]);
        }
    }

    while (signs.length) {}
}
calc([1, '+', 2, '*', 3, '-', 4]); // 3
