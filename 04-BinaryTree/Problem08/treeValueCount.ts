class TreeNodeEight{
    val: number;
    left: TreeNodeEight | null;
    right: TreeNodeEight | null;

    constructor(val: number){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const treeValueCount = (root: TreeNodeEight | null, target: number): number => {
    if(!root) return 0;
    if(!root.left && !root.right && root.val !== target) return 0;
    if(!root.left && !root.right && root.val === target) return 1;

    return treeValueCountHelper(root, target);
}

const treeValueCountHelper = (root: TreeNodeEight | null, target: number): number => {
    if(!root) return 0;
    
    let currentCount: number = (root.val === target) ? 1 : 0;

    currentCount += treeValueCountHelper(root.left, target);
    currentCount += treeValueCountHelper(root.right, target);

    return currentCount;
}