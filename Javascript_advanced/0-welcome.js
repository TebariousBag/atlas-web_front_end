function welcome (firstName, lastName) {
  // variable to hold name
  let fullName = firstName + " " + lastName;
  function displayFullName() {
    // alert with name, space after welcome
    alert("Welcome " + fullName + "!")
  }
  displayFullName();
}
