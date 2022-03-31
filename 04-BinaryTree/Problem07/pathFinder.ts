class TreeNodeSeven{
    val: string;
    left: TreeNodeSeven | null;
    right: TreeNodeSeven | null;

    constructor(val: string){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const pathFinder = (root: TreeNodeSeven | null, target: string): Array<string> | null => {
    if(!root) return null;
    if(!root.left && !root.right && root.val === target) return [root.val];
    if(!root.left && !root.right && root.val !== target) return [];

    const pathArray: Array<string> = [];

    const isFound: boolean = pathFinderHelper(root, target, pathArray);

    if(isFound) return pathArray;
    return null;
}

const pathFinderHelper = (root: TreeNodeSeven | null, target: string, pathArray: Array<string>): boolean => {
    if(!root) return false;

    if(root.val === target){
        pathArray.unshift(root.val);
        return true;
    }

    if(pathFinderHelper(root.left, target, pathArray)){
        pathArray.unshift(root.val);
        return true;
    }

    if(pathFinderHelper(root.right, target, pathArray)){
        pathArray.unshift(root.val);
        return true;
    }

    return false;
}