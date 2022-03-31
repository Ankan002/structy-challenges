"use strict";
class TreeNodeNine {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const howHigh = (node) => {
    if (!node)
        return -1;
    if (!node.left && !node.right)
        return 0;
    return howHighHelper(node) - 1;
};
const howHighHelper = (node) => {
    if (!node)
        return 0;
    let currentHeight = 1;
    let leftHeight = howHighHelper(node.left);
    let rightHeight = howHighHelper(node.right);
    if (leftHeight >= rightHeight)
        return currentHeight + leftHeight;
    return currentHeight + rightHeight;
};
