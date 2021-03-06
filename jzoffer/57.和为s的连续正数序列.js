/**
 * @param {number} target
 * @return {number[][]}
 */
 var findContinuousSequence = function (target) {
    let i = 1, j = 1, sum = 0, res = []
    /** 至少有2个数，例如 2+4 = 6 所以 target/2 */
    while (i <= target / 2) {
        /**
         * 滑动窗口不会往回缩
         */
        // 过大了，缩小边界
        if(sum > target) {
            sum-=i
            i++
        } else if(sum<target) {
            sum+=j
            j++
        } else {
            const temp = []
            /** 这里 是 z<j，不能= */
            for(let z = i; z<j; z++) {
                temp.push(z)
            }
            res.push(temp)
            sum -= i
            i++
        }
    }
    return res
};
findContinuousSequence(3)