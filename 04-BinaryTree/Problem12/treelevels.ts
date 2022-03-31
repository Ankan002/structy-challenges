class TreeNodeTwelve{
    val: string;
    left: TreeNodeTwelve | null;
    right: TreeNodeTwelve | null;

    constructor(val: string){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const treeLevels = (root: TreeNodeTwelve | null): Array<Array<string>> => {
    if(!root) return [];

    const BFSQueue: Array<TreeNodeTwelve> = [root];
    const allLevels: Array<Array<string>> = [];

    while(BFSQueue.length > 0){
        const currentLength: number = BFSQueue.length;
        const currentLevel: Array<string> = [];

        for(let i=0; i<currentLength; i++){
            const currentNode: TreeNodeTwelve | undefined = BFSQueue.shift();

            if(currentNode) currentLevel.push(currentNode.val);

            if(currentNode?.left) BFSQueue.push(currentNode.left);
            if(currentNode?.right) BFSQueue.push(currentNode.right);
        }

        allLevels.push(currentLevel);
    }

    return allLevels;
}