class NodeEight{
    val: number;
    next: NodeEight | null;

    constructor(val: number){
        this.val = val;
        this.next = null;
    }
}

const isUnivalueList = (head: NodeEight | null): boolean => {
    if(!head) return false;
    if(!head.next) return true;

    let lastEncounteredNumber: number = head.val;
    let temp: NodeEight | null = head.next;

    while(temp !== null){
        if(temp.val !== lastEncounteredNumber) return false;
        temp = temp.next;
    }

    return true;
}