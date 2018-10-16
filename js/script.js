/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
var students = document.getElementsByClassName("student-list");



// Create a function to hide all of the items in the list except for the ten you want to show
// Tip: Keep in mind that with a list of 54 students, the last page will only display four

//This function divides the list of students into 'n' groups of 10.
function splitIntoTens() {
  const numberOfChildren = students.childElementCount;
  console.log(numberOfChildren);
}

splitIntoTens();


// Create and append the pagination links - Creating a function that can do this is a good approach




// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here
