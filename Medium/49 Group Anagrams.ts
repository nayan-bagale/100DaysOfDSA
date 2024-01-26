function groupAnagrams(strs: string[]) {
  let res: {
    [key: string]: string[];
  } = {};

  for (let s of strs) {
    let count = new Array(26).fill(0);

    for (let c of s) {
      count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    let temp = count.join(".");
    if (res[temp]) {
      res[temp].push(s);
    } else {
      res[temp] = [s];
    }
  }

  return Object.values(res);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"]));
