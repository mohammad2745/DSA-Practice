const firstUniqueChar = (str) => {
  let map = new Map();

  for (let i of str) {
    map.set(i, (map.get(i) || 0) + 1);
  }

  for (let i of str) {
    if (map.get(i) === 1) return i;
  }

  return null;
};

console.log(firstUniqueChar("abbcddeca"));
