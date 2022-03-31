class TreeNodeFour{
    val: string;
    left: TreeNodeFour | null;
    right: TreeNodeFour | null;

    constructor(val: string){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const treeIncludes = (root: TreeNodeFour | null, target: string): boolean => {
    if(!root) return false;
    if(!root.left && !root.right) return root.val === target;

    return treeIncludesHelper(root, target);
}

const treeIncludesHelper = (root : TreeNodeFour | null, target: string): boolean => {
    if(!root) return false;

    if(root.val === target) return true;

    if(treeIncludesHelper(root.left, target)) return true;
    if(treeIncludesHelper(root.right, target)) return true;

    return false;
}