"use strict";
class NodeOne {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
const linkedListValues = (head) => {
    if (!head)
        return [];
    if (!head.next)
        return [head.val];
    const stringArray = [];
    let temp = head;
    while (temp !== null) {
        stringArray.push(temp.val);
        temp = temp.next;
    }
    return stringArray;
};
