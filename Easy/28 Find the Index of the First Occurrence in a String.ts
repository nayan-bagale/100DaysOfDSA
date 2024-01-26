// TODO:Complete it

function strStr(haystack: string, needle: string): number {
    // if(needle.length)
    let i=0,j=0;
    let posible:number[] = [];
    while(haystack.length > i && needle.length > j){
        if(haystack[i] === needle[j]){
            posible.push(i)
            i++,j++;
        }else{
            i++;
            j=0

        }
    }

    console.log(posible,j)

    if(j === needle.length){
        return posible[0];
    }

    return -1;

}

// console.log(strStr("hello", "ll"));
// console.log(strStr("leetcode", "leeto"));
console.log(strStr("mississippi", "issip"));
// console.log(strStr("sadbutsad", "sad"))