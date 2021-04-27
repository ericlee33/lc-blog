/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    const ans = [], stack = []
    let node = root
    while(node || stack.length) {
        // 将全部left node放到stack
        while(node) {
            stack.push(node)
            node = node.left
        }
        node = stack.pop()
        ans.push(node.val)
        node = node.right
    }
    return ans
};