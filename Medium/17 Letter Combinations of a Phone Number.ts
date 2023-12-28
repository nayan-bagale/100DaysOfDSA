const phoneNumber: { [key: string]: string } = {
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz",
};

function letterCombinations(digits: string): string[] {
  if (digits.length < 1) return [];

  return findCombinations("", digits);
}

const findCombinations = (p: string, up: string): string[] => {
  if (up === "") return [p];

  let result: string[] = [];
  for (let letter of phoneNumber[up[0]]) {
    let newStr = up.slice(1);
    let temp = findCombinations(letter + p, newStr);
    result.push(...temp);
  }

  return result;
};

console.log(letterCombinations("56"));
