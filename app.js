let myLibrary = [];

class Book{

    constructor(title, author, pages, id){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.id = id;
    }

};
const deleteFile = document.createElement("button");

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
});

// submit 
const submit = document.querySelector("#submit");
submit.addEventListener("click", () => {
    const capturarTitle = document.querySelector("#id_title").value;
    const capturarAuthor = document.querySelector("#id_author").value;
    const capturarNPages = document.querySelector("#id_pages").value;
    const capturarId = generarId(myLibrary[myLibrary.length -1]);

    newBook = new Book(capturarTitle, capturarAuthor, capturarNPages, capturarId);
    addBookToLibrary();
    form.style.display = "none";
});

function addBookToLibrary(){
    const table = document.querySelector("table");
    const tBody = document.createElement("tbody");
    const tdTitle = document.createElement("td");
    const tdAuthor = document.createElement("td");
    const tdPages = document.createElement("td");
    const buttonRead = document.createElement("button");
    const buttonDeleteBook = document.createElement("button");

    tdTitle.textContent = newBook.title;
    tdAuthor.textContent = newBook.author;
    tdPages.textContent = newBook.pages;
    buttonRead.className = "readClass";
    buttonRead.textContent = "read";
    buttonRead.style.backgroundColor = "green"
    buttonDeleteBook.textContent = "Delete Book";
    buttonDeleteBook.className = "deleteFila";
    buttonDeleteBook.id = newBook.id;

    table.appendChild(tBody);
    tBody.appendChild(tdTitle);
    tBody.appendChild(tdAuthor);
    tBody.appendChild(tdPages);
    tBody.appendChild(buttonRead)
    tBody.appendChild(buttonDeleteBook);

    myLibrary.push(newBook);
    deleteBook();
    readONotRead();
};
//generar id 
function generarId(obj){
    if(myLibrary.length ===0){
        return 1;
    }
    else{
        return obj.id + 1;
    }  
};
// delete botton book
function deleteBook(){
    const deleteFile = document.querySelectorAll(".deleteFila");
    deleteFile.forEach(item => {
    item.addEventListener("click", (e) => {
    e.target.parentNode.remove();
    for (let i = 0; i<myLibrary.length; i++){
        if(myLibrary[i].id == e.target.id){
            myLibrary.splice(i, 1);
        }; 
    };  
});
});
};
//read o not read
function readONotRead (){
    const allButtonRead = document.querySelectorAll(".readClass");
    allButtonRead.forEach(element => {
    element.onclick = (e) => {
        if (e.target.style.backgroundColor === "green"){
            e.target.style.backgroundColor = "pink";
            e.target.textContent = "not read";
        }
        else if (e.target.style.backgroundColor == "pink"){
            e.target.style.backgroundColor = "green";
            e.target.textContent = "read";
        }
    }
    })
};