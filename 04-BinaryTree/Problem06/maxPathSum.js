"use strict";
class TreeNodeSix {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const maxPathSum = (root) => {
    if (!root)
        return null;
    if (!root.left && !root.right)
        return root.val;
    return maxPathSumHelper(root);
};
const maxPathSumHelper = (root) => {
    if (!root)
        return null;
    let currentVal = root.val;
    let leftVal = maxPathSumHelper(root.left);
    let rightVal = maxPathSumHelper(root.right);
    if (!leftVal && !rightVal)
        return currentVal;
    if (!rightVal && leftVal)
        return currentVal + leftVal;
    if (!leftVal && rightVal)
        return currentVal + rightVal;
    let leftSum = 0;
    let rightSum = 0;
    if (leftVal)
        leftSum = currentVal + leftVal;
    if (rightVal)
        rightSum = currentVal + rightVal;
    if (leftSum >= rightSum)
        return leftSum;
    return rightSum;
};
