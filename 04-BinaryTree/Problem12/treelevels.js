"use strict";
class TreeNodeTwelve {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const treeLevels = (root) => {
    if (!root)
        return [];
    const BFSQueue = [root];
    const allLevels = [];
    while (BFSQueue.length > 0) {
        const currentLength = BFSQueue.length;
        const currentLevel = [];
        for (let i = 0; i < currentLength; i++) {
            const currentNode = BFSQueue.shift();
            if (currentNode)
                currentLevel.push(currentNode.val);
            if (currentNode === null || currentNode === void 0 ? void 0 : currentNode.left)
                BFSQueue.push(currentNode.left);
            if (currentNode === null || currentNode === void 0 ? void 0 : currentNode.right)
                BFSQueue.push(currentNode.right);
        }
        allLevels.push(currentLevel);
    }
    return allLevels;
};
