"use strict";
class TreeNodeFive {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const treeMinValue = (root) => {
    if (!root)
        return -1;
    if (!root.left && !root.right)
        return root.val;
    return treeMinValueHelper(root);
};
const treeMinValueHelper = (root) => {
    if (!root)
        return null;
    const currentNumber = root.val;
    const leftVal = treeMinValueHelper(root.left);
    const rightVal = treeMinValueHelper(root.right);
    if (!leftVal && !rightVal)
        return currentNumber;
    if (!leftVal && rightVal)
        return Math.min(currentNumber, rightVal);
    if (!rightVal && leftVal)
        return Math.min(currentNumber, leftVal);
    if (leftVal && rightVal && leftVal <= rightVal && leftVal <= currentNumber)
        return leftVal;
    if (rightVal && rightVal <= currentNumber)
        return rightVal;
    return currentNumber;
};
