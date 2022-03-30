"use strict";
class NodeFour {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
const getNodeValue = (head, index) => {
    if (!head)
        return null;
    if (index < 0)
        return null;
    if (!head.next && index > 0)
        return null;
    if (!head.next && index === 0)
        return head.val;
    let currentPos = 0;
    let temp = head;
    while (temp !== null) {
        if (currentPos === index)
            return temp.val;
        temp = temp.next;
        currentPos++;
    }
    return null;
};
