"use strict";
class NodeTwelve {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
const createLinkedList = (values) => {
    if (values.length === 0)
        return null;
    if (values.length === 1) {
        const head = new NodeTwelve(values[0]);
        return head;
    }
    let head = new NodeTwelve(values[0]);
    let currentNode = head;
    let currentPos = 1;
    while (currentPos < values.length) {
        let newNode = new NodeTwelve(values[currentPos]);
        currentNode.next = newNode;
        currentNode = newNode;
        currentPos++;
    }
    return head;
};
