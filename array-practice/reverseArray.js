// Reverse an array (without using .reverse())

const reversArray = (arr) => {
  let left = 0, right = arr.length - 1;

  while(left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}
console.log(reversArray([1,2,3,4, 5]));