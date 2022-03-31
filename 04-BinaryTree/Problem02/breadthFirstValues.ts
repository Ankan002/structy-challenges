class TreeNodeTwo{
    val: string;
    left: TreeNodeTwo | null;
    right: TreeNodeTwo | null;

    constructor(val: string){
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

const breadthFirstValues = (root: TreeNodeTwo | null): Array<string> => {
    if(!root) return [];
    if(!root.left && !root.right) return [root.val];

    const BFSQueue: Array<TreeNodeTwo> = [root];
    const stringArray: Array<string> = [];

    while(BFSQueue.length > 0){
        let maxLength = BFSQueue.length;

        for(let i=0; i<maxLength; i++){
            const currentNode: TreeNodeTwo | undefined = BFSQueue.shift();

            if(currentNode) stringArray.push(currentNode.val);

            if(currentNode?.left) BFSQueue.push(currentNode.left);
            if(currentNode?.right) BFSQueue.push(currentNode.right);
        }
    }

    return stringArray;
}