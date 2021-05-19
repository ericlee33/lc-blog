// 存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除所有重复的元素，使每个元素 只出现一次 。

// 返回同样按升序排列的结果链表。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function (head) {
    let node = head
    while (node && node.next) {
        /** 要判断node.next是否存在，否则不存在val */
        if (node.next.val === node.val) {
            node.next = node.next.next
        } else {
            node = node.next
        }
    }
    return head
};

// 输入：head = [1,1,2]
// 输出：[1,2]