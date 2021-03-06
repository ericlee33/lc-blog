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
var reverseList = function (head) {
    if (!head || !head.next) return head;

    /** 定义curr为当前指针，后续要对这个进行操作 */
    let prev = null,
        curr = head;

    while (curr) {
        // 保存 head.next，因为马上我们要改变curr.next 从-> 到<-
        let next = curr.next;
        // 当前指针指向上一个节点，null
        curr.next = prev;

        // 为了下轮循环做准备，prev永远是上一轮的curr，curr为next，相当于双指针一直向后移动
        prev = curr;
        curr = next;
    }
    return prev;
};

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