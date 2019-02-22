/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// GLOBAL VARIABLES //

const listUL = document.getElementsByClassName("student-list")[0];
const list = listUL.getElementsByTagName("li");
const showPerPage = 10;
let page = 1;
let pageFirstStudentIndex = 10 * (page - 1);
let pageLastStudentIndex = pageFirstStudentIndex + 9;

/***
   The `showPage` function hideS all of the items in the
   list except for the amount contained in the variable showPerPage.
***/

const showPage = (list, page) => {

/*
Loop through items and display only ten appropriate for the page number.
*/

    for (let i = 0; i < list.length ; i++) {
      if (i < pageFirstStudentIndex || i > pageLastStudentIndex) {
        list[i].style.display = "none";
      } else {
        list[i].style.display = "";
      }
    }
};

/***
   The `appendPageLinks function` generates, appends, and adds
   functionality to the pagination buttons.
***/

const appendPageLinks = (list, showPerPage) => {
  //Determines the amount of pages.
  let howManyPages = Math.ceil(list.length / showPerPage);

  //Create the pagination div.
  let paginationDiv = document.createElement("div");
  paginationDiv.setAttribute("class", "pagination");
  document.getElementsByClassName("page")[0].appendChild(paginationDiv);

  //Create the pagination ul.
  let paginationLinks = document.createElement("ul");
  paginationLinks.setAttribute("class", "links");
  document.getElementsByClassName("pagination")[0].appendChild(paginationLinks);

  //Create the li elements.
  for (let i = 0; i < howManyPages; i++) {
    let newLI = document.createElement("li");
    newLI.setAttribute("class", "pageNumberLink")
    document.getElementsByClassName("links")[0].appendChild(newLI);

    //Create the a elements.
    let newA = document.createElement("a");
    newA.innerHTML = i + 1;

    //Make sure that on initial load, the first page is active.
    if (i == 0) {
      newA.setAttribute("class", "active")
    }
    //Add an event listener to change pages on click.
    newA.addEventListener("click", function(){
      page = i + 1;
      pageFirstStudentIndex = 10 * (page - 1);
      pageLastStudentIndex = pageFirstStudentIndex + 9;
      showPage(list, page);

      //Change the active 'a'
      let activeClass = document.querySelectorAll(".active")
      for (let y = 0; y < activeClass.length; y++) {
        activeClass[y].classList.remove("active");
      }

      newA.setAttribute("class", "active");

    });
    document.getElementsByClassName("pageNumberLink")[i].appendChild(newA);

  }
};

//Run the functions on initial page load.
showPage(list, page);
appendPageLinks(list, showPerPage);
