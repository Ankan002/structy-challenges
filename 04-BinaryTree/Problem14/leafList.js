"use strict";
class TreeNodeFourteen {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const leafList = (root) => {
    if (!root)
        return [];
    const leafArray = [];
    leafListHelper(root, leafArray);
    return leafArray;
};
const leafListHelper = (root, leafArray) => {
    if (!root.left && !root.right) {
        if (root)
            leafArray.push(root === null || root === void 0 ? void 0 : root.val);
        return;
    }
    if (root.left)
        leafListHelper(root.left, leafArray);
    if (root.right)
        leafListHelper(root.right, leafArray);
};
