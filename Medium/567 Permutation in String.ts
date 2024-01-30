const match = (arr1: string[], arr2: string[]): boolean => {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false
    }
    return true
}

function checkInclusion(s1: string, s2: string): boolean {
    let arr = new Array(26).fill(0);
    for (let i = 0; i < s1.length; i++)
        arr[s1.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;

    let i = 0, j = s1.length - 1;
    while (j < s2.length) {
        let tempArr = new Array(26).fill(0);
        for (let c of s2.slice(i, j + 1))
            tempArr[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        if (match(arr, tempArr)) return true;
        i++;
        j++;
    }
    return false
};

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidboaoo"));
console.log(checkInclusion(" ", " "));