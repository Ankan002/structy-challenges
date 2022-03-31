"use strict";
class TreeNodeOne {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const depthFirstValues = (root) => {
    if (!root)
        return [];
    const stringArray = [];
    depthFirstValuesHelper(root, stringArray);
    return stringArray;
};
const depthFirstValuesHelper = (root, stringArray) => {
    stringArray.push(root.val);
    if (root.left)
        depthFirstValuesHelper(root.left, stringArray);
    if (root.right)
        depthFirstValuesHelper(root.right, stringArray);
};
