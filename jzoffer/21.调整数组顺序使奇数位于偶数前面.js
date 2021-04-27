var exchange = function(nums) {
    let i= 0, j= nums.length - 1
    while(i<j) {
        while(i<j &&  (nums[i] % 2) ===  1) {
            i++
        }
        while(i<j &&  (nums[j] % 2) ===  0) {
            j--
        }
        [nums[j], nums[i]] = [nums[i], nums[j]]
    }
    return nums
};
exchange([1,2,3,4])