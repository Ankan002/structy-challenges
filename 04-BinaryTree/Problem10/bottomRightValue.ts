class TreeNodeTen{
    val: number;
    left: TreeNodeTen | null;
    right: TreeNodeTen | null;

    constructor(val: number){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const bottomRightValue = (root: TreeNodeTen | null): number | null => {
    if(!root) return null;
    if(!root.left && !root.right) return root.val;

    const BFSQueue: Array<TreeNodeTen> = [root];
    
    while(BFSQueue.length > 0){
        const currentLength: number = BFSQueue.length;
        
        for(let i=0; i<currentLength; i++){
            const currentNode: TreeNodeTen | undefined = BFSQueue.shift();
            
            if(currentNode?.left) BFSQueue.push(currentNode.left);
            if(currentNode?.right) BFSQueue.push(currentNode.right);

            if(BFSQueue.length === 0 && currentNode?.val) return currentNode.val;
        }
    }

    return null;
}