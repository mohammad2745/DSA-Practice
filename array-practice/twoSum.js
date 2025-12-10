// Hard — Two Sum (return indices of two numbers that add up to target)

const twoSum = (nums, target) => {
  const map = {};

  for(let i=0; i<nums.length; i++) {
    let need = target - nums[i];

    if(map.hasOwnProperty(need)) {
      return [map[need], i];
    }
    map[nums[i]] = i;
  }
}

const arr = [2,7,11,15];
const result = twoSum(arr, 9);

console.log(result);