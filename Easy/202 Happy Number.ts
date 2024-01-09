function isHappy(n: number): boolean {
    let slow=n,fast=n;

    const helper = (n: number): number => {
      let sum = 0;
      while (n > 0) {
        sum += (n % 10) ** 2;
        n = Math.floor(n / 10);
      }
      return sum;
    };
    
    do{
        slow = helper(slow);
        if(slow === 1) return true;

        fast = helper(helper(fast));
        if(fast === 1) return true

    }while(slow !== fast);

    return false
}




console.log(isHappy(2))