class NodeTwo{
    val: number;
    next: NodeTwo | null;

    constructor(val: number){
        this.val = val;
        this.next = null;
    }
}

const sumList = (head: NodeTwo | null): number => {
    if(!head) return 0;
    if(!head.next) return head.val;

    let sum: number = 0;
    let temp: NodeTwo | null = head;

    while(temp !== null){
        sum += temp.val;
        temp = temp.next;
    }

    return sum;
}