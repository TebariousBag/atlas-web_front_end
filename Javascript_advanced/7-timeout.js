// start
console.log('Start of the execution queue');

// setTimeout function, even at 0 still waits for others to finish first
setTimeout(function() {
	console.log('Final code block to be executed'); }, 0);

// loop through 100 times, logging each time
let i = 1;
while (i <= 100) {
	console.log(i);
	i++;
}

// middle
console.log('End of the loop printing');
