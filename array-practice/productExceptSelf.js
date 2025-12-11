const productExceptSelf = (arr) => {
  let len = arr.length;
  let result = Array(len).fill(1);

  let prefix = 1;
  for(let i=0; i<len; i++) {
    result[i] = prefix;
    prefix *= arr[i];
  }

  let suffix = 1;
  for(let i=len-1; i>= 0; i--) {
    result[i] *= suffix;
    suffix *= arr[i];
  }

  return result;
}

console.log(productExceptSelf([1,2,3,4]));

