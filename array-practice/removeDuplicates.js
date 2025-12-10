// Remove duplicates from a sorted array

const removeDuplicates = (arr) => {
  let i = 0;

  for(let j=1; j<arr.length; j++) {
    if(arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i+1;
}

const arr = [1,1,2,2,3];
const len = removeDuplicates(arr);

console.log(arr.slice(0, len));
