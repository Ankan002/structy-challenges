"use strict";
class NodeThree {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
const linkedListFind = (head, target) => {
    if (!head)
        return false;
    if (!head.next)
        return head.val === target;
    let temp = head;
    while (temp !== null) {
        if (temp.val === target)
            return true;
        temp = temp.next;
    }
    return false;
};
