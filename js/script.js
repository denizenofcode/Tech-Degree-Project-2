/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
let studentList = document.getElementById("student-list");
let studentListItems = studentList.getElementsByTagName("li");
let numberOfStudents = studentList.childElementCount;
const studentsPerPage = 10;
let groupsOfTen = Math.floor(numberOfStudents / studentsPerPage);
let leftoverStudents = numberOfStudents % studentsPerPage;
let pages = groupsOfTen + 1;


// Create a function to hide all of the items in the list except for the ten you want to show
// Tip: Keep in mind that with a list of 54 students, the last page will only display four

function showOnlyTenStudents(list) {
  for(var i = 0; i < studentListItems.length; i++) {
    if (studentListItems[i] > studentsPerPage) {
      studentListItems[i].style.display = "none";
    }
  }
}

document.getElementById("student-list").value = showOnlyTenStudents(studentListItems);


// Create and append the pagination links - Creating a function that can do this is a good approach




// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here
