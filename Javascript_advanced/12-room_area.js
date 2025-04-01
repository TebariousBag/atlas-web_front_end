const roomDimensions = {
	width: 50,
	length: 100,
	// function to return arrea
	getArea: function() {
		return this.width * this.length;
	}
}

// binding the getArea function from roomDimensions to the roomDimensions object
// without bind getArea wont work, because it has no context
// after bind it was a width and length of 50 and 100
// the this is bound to the object
var boundGetArea = roomDimensions.getArea.bind(roomDimensions);
