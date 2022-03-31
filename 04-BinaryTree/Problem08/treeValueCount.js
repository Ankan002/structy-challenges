"use strict";
class TreeNodeEight {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const treeValueCount = (root, target) => {
    if (!root)
        return 0;
    if (!root.left && !root.right && root.val !== target)
        return 0;
    if (!root.left && !root.right && root.val === target)
        return 1;
    return treeValueCountHelper(root, target);
};
const treeValueCountHelper = (root, target) => {
    if (!root)
        return 0;
    let currentCount = (root.val === target) ? 1 : 0;
    currentCount += treeValueCountHelper(root.left, target);
    currentCount += treeValueCountHelper(root.right, target);
    return currentCount;
};
