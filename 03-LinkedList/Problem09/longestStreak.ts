class NodeNine{
    val: number;
    next: NodeNine | null;

    constructor(val: number){
        this.val = val;
        this.next = null;
    }
}

const longestStreak = (head: NodeNine | null): number => {
    if(!head) return 0;
    if(!head.next) return 1;

    let lastEncounteredNumber: number = head.val;

    let longestStreak: number = 0;
    let currentStreak: number = 1;

    let temp: NodeNine | null = head.next;

    while(temp !== null){
        if(temp.val === lastEncounteredNumber){
            currentStreak++;
        }
        else{
            lastEncounteredNumber = temp.val;
            if(currentStreak >= longestStreak) longestStreak = currentStreak;
            currentStreak = 1;
        }

        temp = temp.next;
    }

    if(currentStreak >= longestStreak) return currentStreak;

    return longestStreak
}