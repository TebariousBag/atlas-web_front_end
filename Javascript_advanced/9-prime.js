function countPrimeNumbers() {
  // variable to hold count and variable to iterate starting at 2
  let count = 0;
  let i = 2;

  while (i <= 100) {
    let prime = true;
    // loop through numbers starting at 2 to check if prime
    // prime is divisible by 1 and its self
    for (let j = 2; j < i; j++) {
      // if divisible, not prime
      if (i % j == 0) {
        prime = false;
        // if divisible break loop and check next number
        break;
      }
    }
    // if prime is true, increase count
    if (prime) {
      count++;
    }
    // increment iterator
    i++;
  }
  return count;
}

// start the timer
let startTime = performance.now();
// run the function
countPrimeNumbers();
// end the timer
let endTime = performance.now();
// subtract start time from end time to get the amount of time it took
// back ticks
console.log(`Execution time of printing countPrimeNumbers was ${endTime - startTime} milliseconds.`);
