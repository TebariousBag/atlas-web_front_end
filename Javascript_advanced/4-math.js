function divideBy(firstNumber) {
  return function(secondNumber) {
    return secondNumber / firstNumber;
  }
}

function addBy(firstNumber) {
  return function(secondNumber) {
    return firstNumber + secondNumber;
  }
}

// closures to remember firstNumber
// and return a function that takes secondNumber
const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);
