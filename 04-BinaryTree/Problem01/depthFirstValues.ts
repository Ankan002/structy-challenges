class TreeNodeOne{
    val: string;
    left: TreeNodeOne | null;
    right: TreeNodeOne | null;

    constructor(val: string){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const depthFirstValues = (root: TreeNodeOne | null): Array<string> => {
    if(!root) return [];

    const stringArray: Array<string> = [];

    depthFirstValuesHelper(root, stringArray);

    return stringArray;
}

const depthFirstValuesHelper = (root: TreeNodeOne, stringArray: Array<string>): void => {
    stringArray.push(root.val);

    if(root.left) depthFirstValuesHelper(root.left, stringArray);
    if(root.right) depthFirstValuesHelper(root.right, stringArray);
}