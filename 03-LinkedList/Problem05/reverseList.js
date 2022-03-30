"use strict";
class NodeFive {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
const reverseList = (head) => {
    if (!head || !head.next)
        return head;
    let current = head;
    let previous = null;
    let next = null;
    while (current !== null) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous;
};
