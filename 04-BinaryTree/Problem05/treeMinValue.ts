class TreeNodeFive{
    val: number;
    left: TreeNodeFive | null;
    right: TreeNodeFive | null;

    constructor(val: number){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const treeMinValue = (root: TreeNodeFive | null): number | null => {
    if(!root) return -1;
    if(!root.left && !root.right) return root.val;

    return treeMinValueHelper(root);
}

const treeMinValueHelper = (root: TreeNodeFive | null): number | null => {
    if(!root) return null;

    const currentNumber: number = root.val;

    const leftVal: number | null = treeMinValueHelper(root.left);
    const rightVal: number | null = treeMinValueHelper(root.right);

    if(!leftVal && !rightVal) return currentNumber;

    if(!leftVal && rightVal) return Math.min(currentNumber, rightVal);
    if(!rightVal && leftVal) return Math.min(currentNumber, leftVal);

    if(leftVal && rightVal && leftVal <= rightVal && leftVal <= currentNumber) return leftVal;
    if(rightVal && rightVal <= currentNumber) return rightVal;

    return currentNumber;
}