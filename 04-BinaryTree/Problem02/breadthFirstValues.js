"use strict";
class TreeNodeTwo {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}
const breadthFirstValues = (root) => {
    if (!root)
        return [];
    if (!root.left && !root.right)
        return [root.val];
    const BFSQueue = [root];
    const stringArray = [];
    while (BFSQueue.length > 0) {
        let maxLength = BFSQueue.length;
        for (let i = 0; i < maxLength; i++) {
            const currentNode = BFSQueue.shift();
            if (currentNode)
                stringArray.push(currentNode.val);
            if (currentNode === null || currentNode === void 0 ? void 0 : currentNode.left)
                BFSQueue.push(currentNode.left);
            if (currentNode === null || currentNode === void 0 ? void 0 : currentNode.right)
                BFSQueue.push(currentNode.right);
        }
    }
    return stringArray;
};
