class NodeSeven{
    val: number;
    next: NodeSeven | null;

    constructor(val: number){
        this.val = val;
        this.next = null;
    }
}

const mergeLists = (head1: NodeSeven | null, head2: NodeSeven | null): NodeSeven | null => {
    if(!head1 && !head2) return null;
    if(!head1) return head2;
    if(!head2) return head1;

    let p1: NodeSeven | null = head1;
    let p2: NodeSeven | null = head2;

    let mergeController: NodeSeven = new NodeSeven(0);
    let mergingPointer: NodeSeven = mergeController;

    while(p1 !== null && p2 !== null){
        if(p1.val <= p2.val){
            mergingPointer.next = p1;
            mergingPointer = mergingPointer.next;
            p1 = p1.next;
        }
        else{
            mergingPointer.next = p2;
            mergingPointer = mergingPointer.next;
            p2 = p2.next;
        }
    }

    if(mergingPointer.next === null && p2 !== null) mergingPointer.next = p2;
    else if(mergingPointer.next === null && p1 !== null) mergingPointer.next = p1;

    return mergeController.next;
}