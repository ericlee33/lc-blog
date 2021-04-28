/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root`
 * @return {number[]}
 */
 var postorderTraversal = function(root) {
    const ans = [], stack = []
    let node = root;
    
    while(node || stack.length) {
        ans.unshift(node.val)
        node.left && stack.push(node.left)
        node.right && stack.push(node.right)
        node = stack.pop()
    }

    return ans
};
// 输入: [1,null,2,3]  
//    1
//     \
//      2
//     /
//    3 

// 输出: [3,2,1]