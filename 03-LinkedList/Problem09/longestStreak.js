"use strict";
class NodeNine {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
const longestStreak = (head) => {
    if (!head)
        return 0;
    if (!head.next)
        return 1;
    let lastEncounteredNumber = head.val;
    let longestStreak = 0;
    let currentStreak = 1;
    let temp = head.next;
    while (temp !== null) {
        if (temp.val === lastEncounteredNumber) {
            currentStreak++;
        }
        else {
            lastEncounteredNumber = temp.val;
            if (currentStreak >= longestStreak)
                longestStreak = currentStreak;
            currentStreak = 1;
        }
        temp = temp.next;
    }
    if (currentStreak >= longestStreak)
        return currentStreak;
    return longestStreak;
};
