"use strict";
class TreeNodeThree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const treeSum = (root) => {
    if (!root)
        return 0;
    if (!root.left && !root.right)
        return root.val;
    return treeSumHelper(root);
};
const treeSumHelper = (root) => {
    if (!root)
        return 0;
    let currentSum = root.val;
    if (root.left)
        currentSum += treeSumHelper(root.left);
    if (root.right)
        currentSum += treeSumHelper(root.right);
    return currentSum;
};
