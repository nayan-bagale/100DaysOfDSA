function isValid(s: string): boolean {
  let arr: string[] = [];
    helper(s,arr)
    return arr.length < 1;
}

const helper = (s: string,arr: string[], count: number=0 ) => {
  if (count > s.length-1) return;
  let temp: string[] = ["(", "[", "{"];
  if (temp.includes(s[count])) {
    arr.push(s[count]);
    helper(s, arr, count + 1);
  } else {
    const pop = arr.pop();
    if (
      (s[count] === ")" && pop === "(") ||
      (s[count] === "]" && pop === "[") ||
      (s[count] === "}" && pop === "{")
    ) {
      helper(s, arr, count + 1);
    } else {
      arr.push(s[count]);
      helper(s, arr, count + 1);
    }
  }
};

console.log(isValid("()")); //true
console.log(isValid("()[]{}")); //true
console.log(isValid("(]")); //false
