class NodeSix{
    val: string;
    next: NodeSix | null;

    constructor(val: string){
        this.val = val;
        this.next = null;
    }
}

const zipperList = (head1: NodeSix | null, head2: NodeSix | null): NodeSix | null => {
    if(!head1 && !head2) return null;
    if(!head1) return head2;
    if(!head2) return head1;

    let p1: NodeSix | null = head1;
    let p2: NodeSix | null = head2;

    let currentPos: number = 0;

    while(p1 != null && p2 !== null){
        if(currentPos % 2 === 0){
            let temp: NodeSix = p1;
            p1 = temp.next;
            temp.next = p2;
        }
        else{
            let temp: NodeSix = p2;
            p2 = temp.next;
            temp.next = p1;
        }

        currentPos++;
    }

    return head1;
}