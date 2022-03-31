class NodeTwelve{
    val: string | number;
    next: NodeTwelve | null;

    constructor(val: string | number){
        this.val = val;
        this.next = null;
    }
}

const createLinkedList = (values: Array<string | number>): NodeTwelve | null => {
    if(values.length === 0) return null;
    if(values.length === 1){
        const head: NodeTwelve = new NodeTwelve(values[0]);
        return head;
    }

    let head: NodeTwelve = new NodeTwelve(values[0]);
    let currentNode: NodeTwelve = head;
    let currentPos: number = 1;

    while(currentPos < values.length){
        let newNode: NodeTwelve = new NodeTwelve(values[currentPos]);
        currentNode.next = newNode;
        currentNode = newNode;

        currentPos++;
    }

    return head;
}