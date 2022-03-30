class NodeThree{
    val: number;
    next: NodeThree | null;

    constructor(val: number){
        this.val = val;
        this.next = null;
    }
}

const linkedListFind = (head: NodeThree | null, target: number) => {
    if(!head) return false;
    if(!head.next) return head.val === target;

    let temp: NodeThree | null = head;

    while(temp !== null){
        if(temp.val === target) return true;
        temp = temp.next;
    }

    return false;
};