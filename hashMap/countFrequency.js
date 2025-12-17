const countFrequency = (arr) => {
  let map = new Map();

  for (let i of arr) {
    map.set(i, (map.get(i) || 0) + 1);
  }

  return map;
};

console.log(countFrequency([1, 2, 2, 3, 1]));
