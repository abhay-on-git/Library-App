
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

// var app = window.app;
// var database = window.database;


// // Code for Sending Data to Firebase

// form.addEventListener('submit',async (event) => {
//   event.preventDefault();

//   // Get Form Data
//   var formData = new FormData(form);
//   var bookTittle = formData.get("bookname");
//   var bookAuthor = formData.get("author");
//   var bookPages = formData.get("pages");
//   var bookRead = formData.get("checkbox")==="on";

//   console.log("Form data:", bookTittle, bookAuthor, bookPages, bookRead);
// // console.log("New book reference:", newBookRef);
// // console.log(database)


//   // Set Form Data
//  try {
//   var BookRef = ref(database,'books');
//   var newBookRef = push(BookRef);
//   await set(newBookRef,{
//             tittle: bookTittle,
//             author: bookAuthor,
//             pages: bookPages,
//             checkbox: bookRead,
//   });
//   alert("Book Added Successfully")
//   form.reset();
//  } catch (error) {
//     alert("Error Book is Not Added")
//     console.error("Error adding book:", error);
//  }
// });

