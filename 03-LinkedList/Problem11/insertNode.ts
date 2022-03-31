class NodeEleven{
    val: string;
    next: NodeEleven | null;

    constructor(val: string){
        this.val = val;
        this.next = null;
    }
}

const insertNode = (head: NodeEleven | null, value: string, index: number): NodeEleven | null => {
    if(!head){
        if(index === 0){
            head = new NodeEleven(value);
            return head;
        }
    }

    if(index === 0){
        let newNode: NodeEleven | null = new NodeEleven(value);

        newNode.next = head;
        head = newNode;
        return head;
    }

    let currentNode: NodeEleven | null = head;
    let currentPos: number = 0;

    while(currentNode !== null){
        if(currentPos === index - 1){
            let newNode: NodeEleven = new NodeEleven(value);

            newNode.next = currentNode.next;
            currentNode.next = newNode;
            break;
        }

        currentNode = currentNode.next;
        currentPos++;
    }

    return head;
}