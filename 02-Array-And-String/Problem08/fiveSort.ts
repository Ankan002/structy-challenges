const fiveSort = (nums: Array<number>): Array<number> => {
    if(nums.length < 2) return nums;

    let pointerOne: number = nums.length - 1;
    let pointerTwo: number = nums.length - 1;

    while(pointerOne >= 0 && pointerTwo >= 0){
        if(nums[pointerOne] === 5 && nums[pointerTwo] === 5 ){
            pointerOne--;
            pointerTwo--;
        }
        else if(nums[pointerOne] === 5){
            swap(nums, pointerOne, pointerTwo);
            pointerTwo--;
        }
        else{
            pointerOne--;
        }
    }

    return nums
};

const swap = (nums: Array<number>, pos1: number, pos2: number): void => {
    let temp: number = nums[pos1];
    nums[pos1] = nums[pos2];
    nums[pos2] = temp;
};

console.log(fiveSort([12, 5, 1, 5, 12, 7]));
console.log(fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]));
console.log(fiveSort([5, 5, 5, 1, 1, 1, 4]));
console.log(fiveSort([5, 5, 6, 5, 5, 5, 5]));
console.log(fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5]));