// Medium — Move all zeros to the end (keep order)

let sample = [0,1,0,3,12];

const moveZeros = (arr) => {
  let index = 0;
  for(let num of arr) {
    if(num !=0) arr[index++] = num;
  }

  while(index < arr.length) {
    arr[index++] = 0;
  }
  console.log('Array ', arr);
}


moveZeros(sample);