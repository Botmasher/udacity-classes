// DECORATOR FUNCTION adds properties to an object
var carlike = function (obj) {
	// augment the object with new properties
	obj.loc = loc;
	obj.move = move;
	// declare move inside carlike instead - creates new function every call 
	obj.move = function () {
		// note don't need params or to refer to "this." anymore
		obj.loc ++;
	}
	return obj;
}

/*
var move = function (car) {
	car.loc++;
}
*/

// store this inside the decorator to relate it to the object
// BUT doing that will create a new function every run of carlike()
var move = function() {
	this.loc++;
}

// build class instead of decorator
var Car = function (loc) {
	var obj = {loc:loc};
	obj move = function() {
		obj.loc++;
	};
	return obj;
};

// shared function outside of that class
var move = function () {
	this.loc++;
}

/*
 *	Functional Shared Pattern with functions declared outside 
 * 		- declaring obj functions outside constructor keeps methods being created just once
 * 		- listing functions inside object {}
 *			(1) allows adding or modifying functions
 *			(2) avoids repeating each name inside constructor function
 * 			(3) uses extend(), which isn't in plain js
 * 			(4) add methods as property of class to avoid having them as global object
 */
var Car = function (loc) {
	var obj = {loc: loc};
	extend (obj, Car.methods);
	return obj;
};

Car.methods = {
	move: function() {
		this.loc++;
	}
};