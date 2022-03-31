"use strict";
class NodeEleven {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
const insertNode = (head, value, index) => {
    if (!head) {
        if (index === 0) {
            head = new NodeEleven(value);
            return head;
        }
    }
    if (index === 0) {
        let newNode = new NodeEleven(value);
        newNode.next = head;
        head = newNode;
        return head;
    }
    let currentNode = head;
    let currentPos = 0;
    while (currentNode !== null) {
        if (currentPos === index - 1) {
            let newNode = new NodeEleven(value);
            newNode.next = currentNode.next;
            currentNode.next = newNode;
            break;
        }
        currentNode = currentNode.next;
        currentPos++;
    }
    return head;
};
