class NodeOne{
    val: string;
    next: NodeOne | null;

    constructor(val: string){
        this.val = val;
        this.next = null;
    }
}

const linkedListValues = (head: NodeOne | null): Array<string> => {
    if(!head) return [];
    if(!head.next) return [head.val];

    const stringArray: Array<string> = [];

    let temp: NodeOne | null = head;

    while(temp !== null){
        stringArray.push(temp.val);
        temp = temp.next;
    }

    return stringArray;
}