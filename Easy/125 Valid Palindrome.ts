function isPalindrome(s: string) {
    let newS = s
        .toLowerCase()
        .split('')
        .filter((e) => {
            if (
                (e.charCodeAt(0) >= 'a'.charCodeAt(0) &&
                    e.charCodeAt(0) <= 'z'.charCodeAt(0)) ||
                (e.charCodeAt(0) >= '0'.charCodeAt(0) &&
                    e.charCodeAt(0) <= '9'.charCodeAt(0))
            )
                return e
        })

    for (let i = 0, j = newS.length - 1; i < j; i++, j--)
        if (newS[i].toLowerCase() !== newS[j].toLowerCase()) return false

    return true
}


console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome("0P"));