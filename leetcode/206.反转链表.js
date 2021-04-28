/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 双指针，局部反转
var reverseList = function(head) {
    if(head === null || head.next === null) return head
    let prev = null, cur = head
    while(cur !== null ) {
        // 保留下一个
        let next = cur.next
        // 改变指向  -> 改为 <-
        cur.next = prev
        // prev后移1位
        prev = cur
        // cur后移1位
        cur = next
    }
    return prev
};