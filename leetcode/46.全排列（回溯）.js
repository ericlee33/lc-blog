// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。

// https://www.bilibili.com/video/BV1nC4y1W7ah?from=search&seid=12678593432922384209
// 回溯
/**
 * 什么时候回溯？
 * 当dfs已经到底，但是找不到其它节点的时候，
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    const res = []

    function dfs(path) {
        if(path.length === nums.length) {
            return res.push([...path])
        }

        for(let i=0;i<nums.length;i++) {
            /**
             * 如果path不包括nums，继续dfs，否则剪枝
             */
            if(!path.includes(nums[i])) {
                path.push(nums[i])
                dfs(path)
                path.pop()
            }
        }
    }

    dfs([])
    return res
};
// 输入: [1,2,3]
// 输出:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]


// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/permutations
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。