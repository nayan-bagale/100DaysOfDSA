function strStr(haystack: string, needle: string): number {
    if(haystack.length < needle.length) return -1
    for(let i = 0; i <= haystack.length - needle.length; i++){
        if(haystack.slice(i, i+needle.length) === needle) return i
    }
    return -1

}

console.log(strStr("hello", "ll"));
console.log(strStr("leetcode", "leeto"));
console.log(strStr("mississippi", "issip"));
console.log(strStr("sadbutsad", "sad"))