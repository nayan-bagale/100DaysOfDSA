function wordBreak(s: string, wordDict: string[]) {
    // let tempS = s;
    
    let i=0, j=0;
    while(j <= s.length){
        if (wordDict.includes(s.slice(i, j+1))){
            wordDict = wordDict.filter((e) => e !== s.slice(i, j+1))
            i=j+1;
        }
        j++

    }
    
    return wordDict.length ? false : true;
};

console.log(wordBreak("leetcode", ["leet", "code"]));
console.log(wordBreak("applepenapple", ["apple", "pen"]));
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
console.log(wordBreak("bb", ["a", "b", "bbb", "bbbb"]));
console.log(wordBreak("aaaaaaa", ["aaaa", "aa", "a"]));