const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

// This exercise does not require you to alter this function. But read it. See if you can follow what it takes in, executes, and returns.

// The grill() function. Copy this into your JavaScript as well.

function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};
// Your task is to iterate over the array of foods and invoke the function for each item so that the cookedFood array contains all of the items after they are cooked.


    for(let i = 0; i < foods.length; i++){
        grill(foods[i]);
  }
console.log(cookedFood);


// next exercise is in another directory:If you haven't done so yet, create the workspace/javascript/overly-excited directory structure in your home directory. Open your terminal and enter in the following command.






















// function displayName (firstName, lastName){
// console.log(`${firstName} ${lastName}`)
// }

// displayName ("karla", "gallegos");
// displayName ("jay", "gallegos")

// const bugSquasher = function (bug, typeOfSquasher) {
//     console.log(`The ${bug} was squashed by the ${typeOfSquasher}.`);
// }

// bugSquasher ("butterfly", "chancla");
// bugSquasher ("ladybug", "shoe");



