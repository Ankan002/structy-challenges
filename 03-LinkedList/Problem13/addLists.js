"use strict";
class NodeThirteen {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
const addLists = (head1, head2) => {
    if (!head1 && !head2)
        return null;
    if (!head1)
        return head2;
    if (!head2)
        return head1;
    let answerHead = new NodeThirteen((head1.val + head2.val) % 10);
    let carryOver = Math.floor((head1.val + head2.val) / 10);
    let p1 = head1.next;
    let p2 = head2.next;
    let answerProxy = answerHead;
    while (p1 !== null && p2 !== null) {
        const newValue = p1.val + p2.val + carryOver;
        let newNode = new NodeThirteen(newValue % 10);
        carryOver = Math.floor(newValue / 10);
        answerProxy.next = newNode;
        answerProxy = answerProxy.next;
        p1 = p1.next;
        p2 = p2.next;
    }
    while (p1 !== null) {
        const newValue = p1.val + carryOver;
        let newNode = new NodeThirteen(newValue % 10);
        carryOver = Math.floor(newValue / 10);
        answerProxy.next = newNode;
        answerProxy = answerProxy.next;
        p1 = p1.next;
    }
    while (p2 !== null) {
        const newValue = p2.val + carryOver;
        let newNode = new NodeThirteen(newValue % 10);
        carryOver = Math.floor(newValue / 10);
        answerProxy.next = newNode;
        answerProxy = answerProxy.next;
        p2 = p2.next;
    }
    while (carryOver > 0) {
        let newNode = new NodeThirteen(carryOver % 10);
        carryOver = Math.floor(carryOver / 10);
        answerProxy.next = newNode;
        answerProxy = answerProxy.next;
    }
    return answerHead;
};
