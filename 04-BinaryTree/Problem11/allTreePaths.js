"use strict";
class TreeNodeEleven {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const allTreePaths = (root) => {
    if (!root)
        return [];
    const mainArray = [];
    allTreePathsHelper(root, mainArray, []);
    return mainArray;
};
const allTreePathsHelper = (root, mainArray, subArray) => {
    subArray.push(root.val);
    if (!root.left && !root.right) {
        mainArray.push([...subArray]);
        return;
    }
    if (root.left)
        allTreePathsHelper(root.left, mainArray, subArray);
    if (root.left)
        subArray.pop();
    if (root.right)
        allTreePathsHelper(root.right, mainArray, subArray);
    if (root.right)
        subArray.pop();
};
