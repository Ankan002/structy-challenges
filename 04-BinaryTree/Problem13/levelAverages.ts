class TreeNodeThirteen{
    val: number;
    left: TreeNodeThirteen | null;
    right: TreeNodeThirteen | null;

    constructor(val: number){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const levelAverages = (root: TreeNodeThirteen | null): Array<number> => {
    if(!root) return [];

    const BFSQueue: Array<TreeNodeThirteen> = [root];
    const averageArray: Array<number> = [];

    while(BFSQueue.length > 0){
        const currentLength: number = BFSQueue.length;
        let currentSum: number = 0;
        let totalCharacters: number = 0;

        for(let i=0; i<currentLength; i++){
            const currentNode: TreeNodeThirteen | undefined = BFSQueue.shift();

            if(currentNode){
                currentSum += currentNode.val;
                totalCharacters++;
            }

            if(currentNode?.left) BFSQueue.push(currentNode.left);
            if(currentNode?.right) BFSQueue.push(currentNode.right);
        }

        averageArray.push(currentSum / totalCharacters);
    }

    return averageArray;
}