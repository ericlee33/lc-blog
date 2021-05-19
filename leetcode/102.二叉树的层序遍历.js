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
 var levelOrder = function (root) {
    if (!root) return [];

    const queue = [root],
        res = [];

    while (queue.length) {
        const tempArr = [];
        let len = queue.length;

        /** 如果为stack，例如12345，第二次进入的时候，push之后，再pop，元素就错误了，所以只能为queue */
        // 栈不行的原因：比如 1 2 3 4 5 的树结构  1出栈，放入3 4，实际上就不对了
        /**
         * [2, 1]
         * [2, 4, 3]
         */
        while (len--) {
            const node = queue.shift();
            tempArr.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }

        res.push(tempArr);
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
