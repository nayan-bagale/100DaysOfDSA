type obj = {
  [key: string]: number;
};

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  let sCount: obj = {},
    tCount: obj = {};

  for (let i = 0; i < s.length; i++) {
    sCount[s[i]] = 1 + (sCount[s[i]] ?? 0);
    tCount[t[i]] = 1 + (tCount[t[i]] ?? 0);
  }

  for (let key in sCount) if (sCount[key] !== tCount[key]) return false;

  return true;
}
