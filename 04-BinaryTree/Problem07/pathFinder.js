"use strict";
class TreeNodeSeven {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const pathFinder = (root, target) => {
    if (!root)
        return null;
    if (!root.left && !root.right && root.val === target)
        return [root.val];
    if (!root.left && !root.right && root.val !== target)
        return [];
    const pathArray = [];
    const isFound = pathFinderHelper(root, target, pathArray);
    if (isFound)
        return pathArray;
    return null;
};
const pathFinderHelper = (root, target, pathArray) => {
    if (!root)
        return false;
    if (root.val === target) {
        pathArray.unshift(root.val);
        return true;
    }
    if (pathFinderHelper(root.left, target, pathArray)) {
        pathArray.unshift(root.val);
        return true;
    }
    if (pathFinderHelper(root.right, target, pathArray)) {
        pathArray.unshift(root.val);
        return true;
    }
    return false;
};
