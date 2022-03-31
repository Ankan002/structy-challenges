"use strict";
class NodeSix {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
const zipperList = (head1, head2) => {
    if (!head1 && !head2)
        return null;
    if (!head1)
        return head2;
    if (!head2)
        return head1;
    let p1 = head1;
    let p2 = head2;
    let currentPos = 0;
    while (p1 != null && p2 !== null) {
        if (currentPos % 2 === 0) {
            let temp = p1;
            p1 = temp.next;
            temp.next = p2;
        }
        else {
            let temp = p2;
            p2 = temp.next;
            temp.next = p1;
        }
        currentPos++;
    }
    return head1;
};
