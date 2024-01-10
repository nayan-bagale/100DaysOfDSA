function lengthOfLastWord(s: string): any {
    return s.split(' ').filter((item) => item !== '').pop()?.length
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));