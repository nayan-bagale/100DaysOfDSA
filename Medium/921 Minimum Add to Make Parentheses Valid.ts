import Stack from "../Data Structures/Stack/Stack";

function minAddToMakeValid(s: string): number {
  const stack = new Stack<string>();

  for (let ch of s) {
    if (ch === ")") {
      if (!stack.isEmpty() && stack.peak() === "(") {
        stack.pop();
      } else {
        stack.push(ch);
      }
    } else {
      stack.push(ch);
    }
  }

  return stack.size();
}

console.log(minAddToMakeValid("())"));
console.log(minAddToMakeValid("((("));
