class NodeThirteen{
    val: number;
    next: NodeThirteen | null;

    constructor(val: number){
        this.val = val;
        this.next = null;
    }
}

const addLists = (head1: NodeThirteen | null , head2: NodeThirteen | null): NodeThirteen | null => {
    if(!head1 && !head2) return null;
    if(!head1) return head2;
    if(!head2) return head1;

    let answerHead: NodeThirteen = new NodeThirteen((head1.val + head2.val) % 10);
    let carryOver: number = Math.floor((head1.val + head2.val) / 10);

    let p1: NodeThirteen | null = head1.next;
    let p2: NodeThirteen | null = head2.next;

    let answerProxy: NodeThirteen = answerHead;

    while(p1 !== null && p2 !== null){
        const newValue: number = p1.val + p2.val + carryOver;
        let newNode: NodeThirteen = new NodeThirteen(newValue % 10);
        carryOver = Math.floor(newValue / 10);

        answerProxy.next = newNode;
        answerProxy = answerProxy.next;

        p1 = p1.next;
        p2 = p2.next;
    }

    
    while(p1 !== null){
        const newValue: number = p1.val + carryOver;
        let newNode: NodeThirteen = new NodeThirteen(newValue % 10);
        carryOver = Math.floor(newValue / 10);

        answerProxy.next = newNode;
        answerProxy = answerProxy.next;

        p1 = p1.next;
    }
    

    
    while(p2 !== null){
        const newValue: number = p2.val + carryOver;
        let newNode: NodeThirteen = new NodeThirteen(newValue % 10);
        carryOver = Math.floor(newValue / 10);

        answerProxy.next = newNode;
        answerProxy = answerProxy.next;

        p2 = p2.next;
    }
   

    while(carryOver > 0){
        let newNode: NodeThirteen = new NodeThirteen(carryOver % 10);
        carryOver = Math.floor(carryOver / 10);

        answerProxy.next = newNode;
        answerProxy = answerProxy.next;
    }

    return answerHead;
}