class studentHogwarts {
	// make private with #
	#privateScore = 0;
	#name = null;

	// private method
	// add points to privateScore
	#changeScoreBy(points) {
		this.#privateScore += points;
	}

	// public methods, accessing private methods/properties
	setName(newName) {
		this.#name = newName;
	}

	rewardStudent() {
		this.#changeScoreBy(1);
	}

	penalizeStudent() {
		this.#changeScoreBy(-1);
	}

	getScore() {
		// always remind myself backticks
		return `${this.#name}: ${this.#privateScore}`;
	}
}

// instance of Harry
// reward 4 times
let harry = new studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
// harrys score
console.log(harry.getScore());

// instance of Draco
// 1 reward 3 penalize
let draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
// dracos score
console.log(draco.getScore());
