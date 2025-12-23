const longestConsecutive = (arr) => {
  let result = 0;
  let max = 1;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 === arr[i + 1]) {
      max++;
      result = Math.max(result, max);
    } else if (arr[i] === arr[i + 1]) {
      continue;
    } else {
      max = 0;
    }
  }

  return result;
};

console.log(longestConsecutive([100, 4, 200, 1, 1, 3, 2]));
