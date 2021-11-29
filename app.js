let myLibrary = [];


function book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    //this.read = read;

    /*this.info = function (){
        console.log (title + author + pages );
    }*/
}

function addBookToLibrary(){
}

// DOM
const form = document.querySelector(".form");

// Open form by clicking New Book
const addNewBook = document.querySelector("#addNewBook");
addNewBook.addEventListener("click", (e) => {
    form.style.display = "block";
});

// Close form
const closeForm = document.querySelector(".closeForm");
closeForm.addEventListener("click", (e) => {
    form.style.display = "none";
})

let title = 0;
let author = 0;
let pages = 0;
//
const id_title = document.querySelector("#id_title");
const id_author = document.querySelector("#id_author");
const id_pages = document.querySelector("#id_pages");

// submit 
const submit = document.querySelector("#submit");
submit.addEventListener("click", () => {
    title = id_title.value;
    author = id_author.value;
    pages = id_pages.value;
})