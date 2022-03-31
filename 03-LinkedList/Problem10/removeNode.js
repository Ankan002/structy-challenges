"use strict";
class NodeTen {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
const removeNode = (head, targetVal) => {
    if (!head)
        return head;
    if (head.val === targetVal) {
        let temp = head;
        head = head.next;
        temp.next = null;
        return head;
    }
    let current = head.next;
    let previous = head;
    while (current !== null) {
        if (current.val === targetVal) {
            previous.next = current.next;
            current.next = null;
            break;
        }
        previous = current;
        current = current.next;
    }
    return head;
};
