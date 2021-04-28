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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return [];
    }
    const res = [];
    /** 第一次用成了stack */
    let queue = [root];

    while (queue.length) {
        const row = [];
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            row.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        res.push(row);
    }

    return res;
};

const obj = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 2,
            right: {
                val: 10,
            },
        },
    },
    right: {
        val: 3,
    },
};
console.log(levelOrder(obj));
