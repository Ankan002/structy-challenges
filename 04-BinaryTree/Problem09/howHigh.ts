class TreeNodeNine{
    val: string;
    left: TreeNodeNine | null;
    right: TreeNodeNine | null;

    constructor(val: string){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const howHigh = (node: TreeNodeNine | null): number => {
    if(!node) return -1;
    if(!node.left && ! node.right) return 0;

    return howHighHelper(node) - 1;
}

const howHighHelper = (node: TreeNodeNine | null): number => {
    if(!node) return 0;

    let currentHeight: number = 1;

    let leftHeight: number = howHighHelper(node.left);
    let rightHeight: number = howHighHelper(node.right);

    if(leftHeight >= rightHeight) return currentHeight + leftHeight;

    return currentHeight + rightHeight;
}