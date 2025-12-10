// Kadane’s Algorithm — Maximum Subarray Sum

const maxSubarraySum = (arr) => {
  let res = arr[0];

  let maxEnd = arr[0];

  for(let i=1; i<arr.length; i++) {
    maxEnd = Math.max(maxEnd + arr[i], arr[i]);

    res = Math.max(res, maxEnd);
  }
  return maxEnd;
}

const arr = [2, 3, -8, 7, -1, 2, 3];

console.log(maxSubarraySum(arr));