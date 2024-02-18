import Stack from "../Data Structures/Stack/Stack";

function calc(first:number, second:number, operator:string):number{
    switch(operator){
        case '+':
            return first+second;
        case '-':
            return first-second;
        case '*':
            return first*second;
        case '/':
            return Math.trunc(first/second);
        default:
            throw new Error('Not valid Operator, valid operator is +,-,* and /.');
    }
}

function evalRPN(tokens: string[]): number {
    let stack = new Stack<string>();
    for(let token of tokens){
        if(Number.isInteger(parseInt(token))){
            stack.push(token);
            continue;
        }
        let second = stack.pop();
        let first = stack.pop();
        stack.push(calc(parseInt(first), parseInt(second), token).toString());
    }

    return parseInt(stack.pop());
}

console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
