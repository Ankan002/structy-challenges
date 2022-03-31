"use strict";
class NodeEight {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
const isUnivalueList = (head) => {
    if (!head)
        return false;
    if (!head.next)
        return true;
    let lastEncounteredNumber = head.val;
    let temp = head.next;
    while (temp !== null) {
        if (temp.val !== lastEncounteredNumber)
            return false;
        temp = temp.next;
    }
    return true;
};
