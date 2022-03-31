class TreeNodeFourteen{
    val: string;
    left: TreeNodeFourteen | null;
    right: TreeNodeFourteen | null;

    constructor(val: string){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const leafList = (root: TreeNodeFourteen | null): Array<string> => {
    if(!root) return [];

    const leafArray: Array<string> = [];

    leafListHelper(root, leafArray);

    return leafArray;
}

const leafListHelper = (root: TreeNodeFourteen, leafArray: Array<string>): void => {
    if(!root.left && !root.right){
        if(root) leafArray.push(root?.val);
        return;
    }

    if(root.left) leafListHelper(root.left, leafArray);
    if(root.right) leafListHelper(root.right, leafArray);
}