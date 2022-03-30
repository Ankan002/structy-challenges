"use strict";
class NodeTwo {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
const sumList = (head) => {
    if (!head)
        return 0;
    if (!head.next)
        return head.val;
    let sum = 0;
    let temp = head;
    while (temp !== null) {
        sum += temp.val;
        temp = temp.next;
    }
    return sum;
};
