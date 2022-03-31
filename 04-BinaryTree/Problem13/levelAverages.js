"use strict";
class TreeNodeThirteen {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const levelAverages = (root) => {
    if (!root)
        return [];
    const BFSQueue = [root];
    const averageArray = [];
    while (BFSQueue.length > 0) {
        const currentLength = BFSQueue.length;
        let currentSum = 0;
        let totalCharacters = 0;
        for (let i = 0; i < currentLength; i++) {
            const currentNode = BFSQueue.shift();
            if (currentNode) {
                currentSum += currentNode.val;
                totalCharacters++;
            }
            if (currentNode === null || currentNode === void 0 ? void 0 : currentNode.left)
                BFSQueue.push(currentNode.left);
            if (currentNode === null || currentNode === void 0 ? void 0 : currentNode.right)
                BFSQueue.push(currentNode.right);
        }
        averageArray.push(currentSum / totalCharacters);
    }
    return averageArray;
};
