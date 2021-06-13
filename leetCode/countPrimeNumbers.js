/**
 * count the number of primes
 */


function findNumberOfPrimes(num){
    // seive of erathostnes

    let isPrime = new Array(num).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    if(num<2) return 0;
    for(let i = 2;i<=Math.sqrt(num);i++){
        if(isPrime[i]){
            for(let j=2;j*i<num;j++){
                isPrime[j*i] =false
            }
        }
    }
    return isPrime.filter(Boolean).length;
}


console.log(findNumberOfPrimes(34));