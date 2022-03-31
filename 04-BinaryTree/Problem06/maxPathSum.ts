class TreeNodeSix{
    val: number;
    left: TreeNodeSix | null;
    right: TreeNodeSix | null;

    constructor(val: number){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const maxPathSum = (root: TreeNodeSix | null): number | null => {
    if(!root) return null;
    if(!root.left && !root.right) return root.val;

    return maxPathSumHelper(root);
}

const maxPathSumHelper = (root: TreeNodeSix | null): number | null => {
    if(!root) return null;

    let currentVal: number = root.val;

    let leftVal: number | null = maxPathSumHelper(root.left);
    let rightVal: number | null = maxPathSumHelper(root.right);

    if(!leftVal && !rightVal) return currentVal;
    if(!rightVal && leftVal) return currentVal + leftVal;
    if(!leftVal && rightVal) return currentVal + rightVal;

    let leftSum: number = 0;
    let rightSum: number = 0;

    if(leftVal) leftSum = currentVal + leftVal;
    if(rightVal) rightSum = currentVal + rightVal;

    if(leftSum >= rightSum) return leftSum;
    return rightSum;
}