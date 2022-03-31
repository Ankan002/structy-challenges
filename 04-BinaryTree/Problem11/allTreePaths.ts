class TreeNodeEleven{
    val: string;
    left: TreeNodeEleven | null;
    right: TreeNodeEleven | null;

    constructor(val: string){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const allTreePaths = (root: TreeNodeEleven | null): Array<Array<string>> => {
    if(!root) return [];

    const mainArray: Array<Array<string>> = [];

    allTreePathsHelper(root, mainArray, []);

    return mainArray;
}

const allTreePathsHelper = (root: TreeNodeEleven, mainArray: Array<Array<string>>, subArray: Array<string>): void => {
    subArray.push(root.val);

    if(!root.left && !root.right){
        mainArray.push([...subArray]);
        return;
    }

    if(root.left) allTreePathsHelper(root.left, mainArray, subArray);
    if(root.left) subArray.pop();
    if(root.right) allTreePathsHelper(root.right, mainArray, subArray);
    if(root.right) subArray.pop();
}