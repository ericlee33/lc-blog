(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{393:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 编写一个程序，找到两个单链表相交的起始节点。")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {ListNode} headA\n * @param {ListNode} headB\n * @return {ListNode}\n */")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getIntersectionNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("headA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" headB")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方法3初看很难理解，但是细想就会发现很简单很巧妙 A和B两个链表长度可能不同，但是A+B和B+A的长度是相同的，所以遍历A+B和遍历B+A一定是同时结束。 如果A,B相交的话A和B有一段尾巴是相同的，所以两个遍历的指针一定会同时到达交点 如果A,B不相交的话两个指针就会同时到达A+B（B+A）的尾节点")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" headA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" headB\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" headB\n        "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" headA\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出：Reference of the node with value = 8")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输入解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 来源：力扣（LeetCode）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 链接：https://leetcode-cn.com/problems/intersection-of-two-linked-lists")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。```")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);