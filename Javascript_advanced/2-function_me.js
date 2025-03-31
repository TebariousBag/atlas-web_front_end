function welcomeMessage(fullName) {
  // return function to save as closure
  return function() {
    alert("Welcome " + fullName);
  };
}
// tried with const and let
const guillaume = welcomeMessage("Guillame");
let alex = welcomeMessage("Alex");
let fred = welcomeMessage("Fred");
