"use strict";
class TreeNodeTen {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const bottomRightValue = (root) => {
    if (!root)
        return null;
    if (!root.left && !root.right)
        return root.val;
    const BFSQueue = [root];
    while (BFSQueue.length > 0) {
        const currentLength = BFSQueue.length;
        for (let i = 0; i < currentLength; i++) {
            const currentNode = BFSQueue.shift();
            if (currentNode === null || currentNode === void 0 ? void 0 : currentNode.left)
                BFSQueue.push(currentNode.left);
            if (currentNode === null || currentNode === void 0 ? void 0 : currentNode.right)
                BFSQueue.push(currentNode.right);
            if (BFSQueue.length === 0 && (currentNode === null || currentNode === void 0 ? void 0 : currentNode.val))
                return currentNode.val;
        }
    }
    return null;
};
