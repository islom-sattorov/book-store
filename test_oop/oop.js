// Header
let headerContainer = document.createElement('header');
headerContainer.className = "header";
document.body.appendChild(headerContainer);

let globalContainer = document.createElement('div');
globalContainer.className = "container";
headerContainer.appendChild(globalContainer);

let title = document.createElement('h1');
title.innerHTML = `My <span>Book</span> list`;
globalContainer.appendChild(title);

// Main
let mainContainer = document.createElement("main");
mainContainer.className = "main";
document.body.appendChild(mainContainer);

let globalContainer2 = document.createElement('div');
globalContainer2.className = "container";
mainContainer.appendChild(globalContainer2);

let bookForm = document.createElement('form'); // id: book-form
globalContainer2.appendChild(bookForm);


// Title input
let formGroup = document.createElement('div');
formGroup.className = "form-group";
bookForm.appendChild(formGroup);

let titleLabel = document.createElement("label");
titleLabel.setAttribute("for", "title");
titleLabel.innerHTML = "Title";
formGroup.appendChild(titleLabel);

let titleInput = document.createElement('input');
titleInput.setAttribute("type", "text");
titleInput.id = "title";
titleInput.className = 'form-control';
formGroup.appendChild(titleInput);

// Author input
let formGroup2 = document.createElement('div');
formGroup2.className = "form-group";
bookForm.appendChild(formGroup2);

let authorLabel = document.createElement("label");
authorLabel.setAttribute("for", "author");
authorLabel.innerHTML = "Author";
formGroup2.appendChild(authorLabel);

let authorInput = document.createElement('input');
authorInput.setAttribute("type", "text");
authorInput.id = "author";
authorInput.className = 'form-control';
formGroup2.appendChild(authorInput);

// ISBN#
let formGroup3 = document.createElement('div');
formGroup3.className = "form-group";
bookForm.appendChild(formGroup3);

let isbnLabel = document.createElement("label");
isbnLabel.setAttribute("for", "isbn");
isbnLabel.innerHTML = "isbn#";
formGroup3.appendChild(isbnLabel);

let isbnInput = document.createElement('input');
isbnInput.setAttribute("type", "text");
isbnInput.id = "isbn";
isbnInput.className = 'form-control';
formGroup3.appendChild(isbnInput);

// Submit BTN
let submitBtn = document.createElement("input");
submitBtn.setAttribute("type", "submit");
submitBtn.setAttribute("value", "Add Book");
submitBtn.className = "btn_submit";
bookForm.appendChild(submitBtn);

