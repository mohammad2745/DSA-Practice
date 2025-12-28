var removeDuplicates = function(nums) {
    let count = 1;
    if(nums.length === 0) return 0;

    for(let i=1; i<nums.length-1; i++) {
        if((nums[i-1] === nums[i]) && (nums[i+1] === nums[i])) {
            continue;
        } else {
            nums[count] = nums[i];
            count++;
        }
    }

    if(nums.length === 1) {
        return count;
    } else if(nums.length === 2) {
        return count+1;
    } else {
        nums[count] = nums[nums.length-1];
        count++;
    }
    return count;
};

console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));