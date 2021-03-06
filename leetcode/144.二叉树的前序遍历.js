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

// recursive method
var preorderTraversal = function(root) {
    /** 注意边界条件 */
    if (!root) return [];
    const arr = [];
    const traversal = node => {
        arr.push(node.val);
        node.left && traversal(node.left);
        node.right && traversal(node.right);
    };
    traversal(root);
    return arr;
};

var preorderTraversal = function(root) {
    if (!root) return [];
    const ans = [];
    const stack = [root];
    while (stack.length) {
        const node = stack.pop();
        ans.push(node.val);
        node.right && stack.push(node.right);
        node.left && stack.push(node.left);
    }
    return ans;
};
