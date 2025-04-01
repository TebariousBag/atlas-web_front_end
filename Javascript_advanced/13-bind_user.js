// object user
const user = {
	hobby: "Calligraphy",
	favoriteSport: "Hockey",
	astrologicalSign: "Aries",
	firstName: "Guillaume",
	lastName: "Johns",
	location: "Netherlands",
	occupation: "Engineer",
}
// function returns info based on object user
// since we bind this function to user, this will be user
function logWelcomeUser(welcomeString) {
  console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`);
}

// bind the function to the user object
// it has properties to puull from
const bindLogWelcomeUser = logWelcomeUser.bind(user);

// returns
bindLogWelcomeUser("Hello");
bindLogWelcomeUser("Hola");
