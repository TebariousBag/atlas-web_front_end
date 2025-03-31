globalVariable = "Welcome";
function outer() {
	alert(globalVariable);
	// use const, and space after
	const course = " Holberton";
	function inner () {
		alert(globalVariable + course);
		const exclamation = "!";
		function inception() {
			// no quotations here
			alert(globalVariable + course + exclamation);
		}
		inception();
	}
	inner();
}
outer();
