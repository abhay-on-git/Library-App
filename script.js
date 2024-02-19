
// Copyright Date Updation Code
var currYear = document.getElementById("currYear");
var fullYear  = new Date().getFullYear();
currYear.innerHTML = fullYear;

// Code For Showing Form
const addBtn = document.getElementById("btn");
var form = document.getElementById("myform");

addBtn.addEventListener('click',() => {
   form.style.display = "block";
});
