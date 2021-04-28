// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(0, head)
    let headTemp = dummy
    let fake = dummy
    let len = 0
    while (fake !== null) {
        len++
        fake = fake.next
    }
    for (let i = 1; i < len - n + 1 ; i++) {
        headTemp = headTemp.next
    }
    headTemp.next = headTemp.next.next
    return dummy.next
};

// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]