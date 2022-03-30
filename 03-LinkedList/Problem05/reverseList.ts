class NodeFive{
    val: string;
    next: NodeFive | null;

    constructor(val: string){
        this.val = val;
        this.next = null;
    }
}

const reverseList = (head: NodeFive | null): NodeFive | null => {
    if(!head || !head.next) return head;

    let current: NodeFive | null = head;
    let previous: NodeFive | null = null;
    let next: NodeFive | null = null;

    while(current !== null){
        next = current.next;
        current.next = previous;

        previous = current;
        current = next;
    }

    return previous;
}