class NodeFour{
    val: string;
    next: NodeFour | null;

    constructor(val: string){
        this.val = val;
        this.next = null;
    }
}

const getNodeValue = (head: NodeFour | null, index: number): string | null => {
    if(!head) return null;
    if(index < 0) return null;
    if(!head.next && index > 0) return null;
    if(!head.next && index === 0) return head.val;

    let currentPos: number = 0;
    let temp: NodeFour | null = head;

    while(temp !== null){
        if(currentPos === index) return temp.val;
        temp = temp.next;
        currentPos++;
    }

    return null;
}