// TODO: Complete the code

import Stack from '../Data Structures/Stack/Stack'

function removeOuterParentheses(s: string): string {
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

    
}

console.log(removeOuterParentheses("(()())(())"));