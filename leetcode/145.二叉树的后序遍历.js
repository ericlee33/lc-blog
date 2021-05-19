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
 */ //
 var postorderTraversal = function (root) {
    if (!root) return [];

    let res = [];

    let s1 = [root];
    let s2 = [];

    /** 按照 根 右 左 逆着 推到s2栈里，最后再依次出栈 */
    while (s1.length) {
        let node = s1.pop();
        s2.push(node);
        if (node.left) s1.push(node.left);
        if (node.right) s1.push(node.right);
    }
    /** 实际上就是加了一波，利用第二个栈进行反转操作 */
    while (s2.length) {
        res.push(s2.pop().val);
    }

    return res;
};
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