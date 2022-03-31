class NodeTen{
    val: string;
    next: NodeTen | null;

    constructor(val: string){
        this.val = val;
        this.next = null;
    }
}

const removeNode = (head: NodeTen | null, targetVal: string): NodeTen | null => {
    if(!head) return head;
    if(head.val === targetVal){
        let temp: NodeTen = head;
        head = head.next
        temp.next = null;
        return head;
    }

    let current: NodeTen | null = head.next;
    let previous: NodeTen | null = head;
    
    while(current !== null){
        if(current.val === targetVal){
            previous.next = current.next;
            current.next = null;
            break;
        }
        
        previous = current;
        current = current.next;
    }

    return head;
}