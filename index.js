import { books, usd } from './list.js';

// HEADER HEADER HEADER HEADER HEADER HEADER HEADER HEADER HEADER HEADER

// Header Container
let headerContainer = document.createElement('header');
document.body.appendChild(headerContainer);
headerContainer.className = "header";

// Container
let globalContainer = document.createElement('div');
headerContainer.appendChild(globalContainer);
globalContainer.className = "container";

// Header Flex
let headerFlexContainer = document.createElement('div');
headerFlexContainer.className = "flex-header";
globalContainer.appendChild(headerFlexContainer);

// Title for Header
let titleHeader = document.createElement('h1');
headerFlexContainer.appendChild(titleHeader);
titleHeader.innerHTML = "Book Store";

// Input Container 
let inputContainer = document.createElement('div');
inputContainer.className = "input-container";
headerFlexContainer.appendChild(inputContainer);

// Checkbox Container
let checkboxContainer = document.createElement('div');
checkboxContainer.className = "checkbox-container";
inputContainer.appendChild(checkboxContainer)

// Label for input checkbox
let labelRadioBtn = document.createElement('label');
checkboxContainer.appendChild(labelRadioBtn);
labelRadioBtn.setAttribute('for', 'author');
labelRadioBtn.innerHTML = "Author:"


// Checkbox Input
let authorCheckBox = document.createElement('input');
authorCheckBox.setAttribute('type', "checkbox");
authorCheckBox.setAttribute('name', "author")
checkboxContainer.appendChild(authorCheckBox)

// Input Text
let inputSearch = document.createElement('input');
inputSearch.setAttribute("type", "text");
inputSearch.setAttribute("placeholder", "search");
inputContainer.appendChild(inputSearch);

// Button for Search
let addBookBtn = document.createElement('button');
addBookBtn.innerHTML = "Add book";
inputContainer.appendChild(addBookBtn);

addBookBtn.addEventListener('click', () => {
    if (addBookBtn.innerHTML == "Add book") {
        mainContainer.style.display = "none";
        sectionContainer.style.display = "block";
        addBookBtn.innerHTML = "Return";
    } else if (addBookBtn.innerHTML == "Return") {
        mainContainer.style.display = "block";
        sectionContainer.style.display = "none"
        addBookBtn.innerHTML = "Add book";
    }
})

// USD CHECK
let usdCurrent = document.createElement('span');
usdCurrent.innerHTML = `${usd} USD`;
inputContainer.appendChild(usdCurrent);



function changeCurrent() {
    for (let i = 0; i < books.length; i++) {
        if (books[i].currency === "usd") {
            books[i].price = books[i].price * usd.toFixed();
        }
    }
}

changeCurrent();

// MAIN MAIN MAIN MAIN MAIN MAIN MAIN MAIN MAIN MAIN MAIN

// Main Container
let mainContainer = document.createElement('main');
document.body.appendChild(mainContainer);
mainContainer.className = "main";

// Container 
let globalContainer2 = document.createElement("div");
mainContainer.appendChild(globalContainer2);
globalContainer2.className = "container";

// Flex container
let mainFlex = document.createElement("div");
globalContainer2.appendChild(mainFlex);
mainFlex.className = "main-flex";

// btn TOP
let btnTop = document.createElement('button');
mainFlex.appendChild(btnTop);
btnTop.className = "btn__top";
btnTop.innerHTML = "to top";

let arrowBtnTop = document.createElement('img');
btnTop.appendChild(arrowBtnTop);
arrowBtnTop.setAttribute('src', "img/Vector-arrow.png");
arrowBtnTop.className = "arrowBtn";
arrowBtnTop.style.width = "20px"

// Scroll Event
window.addEventListener('scroll', () => {
    // const scrollable = document.documentElement.scrollHeight - window.innerHeight
    const scrolls = window.scrollY;
    console.log(scrolls);
    if (scrolls >= 500) {
        btnTop.style.opacity = "1";
        btnTop.disabled = false;
        btnTop.style.cursor = "pointer";
    } else if (scrolls < 500) {
        btnTop.style.opacity = "0";
        btnTop.disabled = true;
        btnTop.style.cursor = "auto";
    }
})

btnTop.addEventListener('click', () => {
    const scrolls = window.scrollY;
    window.scrollTo({
        top: 0,
        bottom: scrolls,
        behavior: "smooth",
    });
})

// Grid Container
let gridContainer = document.createElement("div");
mainFlex.appendChild(gridContainer);
gridContainer.className = "grid-container";

// Book div
function createBookDiv() {
    for (let i = 0; i < books.length; i++) {
        let name = document.createElement("div");
        let title = document.createElement("h3");
        let pic = document.createElement("img");
        let author = document.createElement("p");
        let price = document.createElement("span");
        let buyBtn = document.createElement('button');

        name.className = `book id${i + 1}`;

        // Title
        name.appendChild(title);
        title.className = "titleBook";
        title.innerHTML = books[i].name;

        // Picture
        name.append(pic);
        pic.className = "picBook";
        if (books[i].price <= 100) {
            pic.setAttribute("src", "https://www.incimages.com/uploaded_files/image/1920x1080/getty_587536358_2000133320009280405_395605.jpg");
        } else if (books[i].price > 100 && books[i].price <= 500) {
            pic.setAttribute("src", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcbsnews2.cbsistatic.com%2Fhub%2Fi%2Fr%2F2015%2F12%2F11%2F7f3c9843-adb1-4022-be13-82515641a9fc%2Fthumbnail%2F1200x630%2F5af2e16fd2ecd02f06637db5ca110a43%2Fopen-book.jpg&f=1&nofb=1");
        } else if (books[i].price > 500) {
            pic.setAttribute("src", "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.cambridgeblog.org%2Fwp-content%2Fuploads%2F2018%2F06%2Fantique-books-1024x512.png&f=1&nofb=1");
        }
        pic.style.width = "80%";
        pic.style.margin = "0 auto"
        pic.style.height = "200px";
        pic.style.border = "3px solid #be8f3c"

        // Author
        name.appendChild(author);
        author.className = "authorBook";
        author.innerHTML = books[i].author;

        // Price
        name.appendChild(price);
        price.className = "priceBook"
        price.innerHTML = books[i].price + " TJS";

        name.appendChild(buyBtn);
        buyBtn.className = "buyBtn";
        if (books[i].stock == "stock") {
            buyBtn.innerHTML = "Buy";
        } else if (books[i].stock == "out of stock") {
            buyBtn.disabled = true;
            buyBtn.innerHTML = "out of stock";
        }

        gridContainer.appendChild(name)
    }

    return 1
}

createBookDiv();

// Filter Search
let filterSearch = document.createElement('aside');
mainFlex.appendChild(filterSearch);
filterSearch.className = "aside-filter";

// Label for input
let labelInputRange = document.createElement('label');
filterSearch.appendChild(labelInputRange);
labelInputRange.setAttribute('for', 'price');
labelInputRange.innerHTML = "Range Price"

// Input Range
let priceRange = document.createElement('input');
labelInputRange.appendChild(priceRange);
priceRange.setAttribute('type', 'range');
priceRange.setAttribute('min', 50);
priceRange.setAttribute('max', 2000);
priceRange.setAttribute('step', 50)
priceRange.setAttribute('value', 2000);
priceRange.className = "sliderPrice";

// Value Range
let valueRange = document.createElement('span');
labelInputRange.appendChild(valueRange);
valueRange.innerHTML = `2000 TJS`;

priceRange.addEventListener('input', () => {
    valueRange.innerHTML = `${priceRange.value} TJS`;
})

// Form Language Radio BTN
let formLanguage = document.createElement('form');
filterSearch.appendChild(formLanguage);
formLanguage.className = "form-radio";

let languageLabel1 = document.createElement('label');
formLanguage.appendChild(languageLabel1)
languageLabel1.innerHTML = "Русский"

let languageRadioBtn1 = document.createElement('input');
formLanguage.appendChild(languageRadioBtn1);
languageRadioBtn1.setAttribute("type", "radio");
languageRadioBtn1.setAttribute("name", "fav_language");
languageRadioBtn1.setAttribute("value", "russian");

let languageLabel2 = document.createElement('label');
formLanguage.appendChild(languageLabel2)
languageLabel2.innerHTML = "English"

let languageRadioBtn2 = document.createElement('input');
formLanguage.appendChild(languageRadioBtn2);
languageRadioBtn2.setAttribute("type", "radio");
languageRadioBtn2.setAttribute("name", "fav_language");
languageRadioBtn2.setAttribute("value", "english");

let languageLabel3 = document.createElement('label');
formLanguage.appendChild(languageLabel3)
languageLabel3.innerHTML = "All"

let languageRadioBtn3 = document.createElement('input');
formLanguage.appendChild(languageRadioBtn3);
languageRadioBtn3.setAttribute("type", "radio");
languageRadioBtn3.setAttribute("name", "fav_language");
languageRadioBtn3.setAttribute("checked", "checked");
languageRadioBtn3.setAttribute("value", "all");

// Reset Button
let resetBtn = document.createElement('button');
formLanguage.appendChild(resetBtn);
resetBtn.className = "reset-btn"
resetBtn.innerHTML = "Reset"

resetBtn.addEventListener('click', () => {
    languageLabel3.checked = true;
    authorCheckBox.checked = false;
    priceRange.value = 2000;
})



// Search Engine
let bookDivs = document.querySelectorAll('.book');

inputSearch.addEventListener("input", e => {
    let text = e.target.value.toLowerCase().trim();
    let textWoutDot = text.replace(/\.$/, "");
    let textWoutMultiDot = textWoutDot.replace(/\.+$/, "");
    let foundBooks = [];
    // let foundAuthorBooks = [];
    for (let i = 0; i < books.length; i++) {
        bookDivs[i].style.display = "none";
        if (priceRange.value >= books[i].price
            && languageRadioBtn3.checked == true
            && authorCheckBox.checked == false
            && books[i].name.toLowerCase().includes(textWoutMultiDot.toLowerCase())) {
            foundBooks.push(bookDivs[i]);
            foundBooks.forEach(item => {
                itemVision(item)
            })
        } else if (priceRange.value >= books[i].price
            && languageRadioBtn2.checked == true
            && authorCheckBox.checked == false
            && books[i].language == "english"
            && books[i].name.toLowerCase().includes(textWoutMultiDot.toLowerCase())) {
            foundBooks.push(bookDivs[i]);
            foundBooks.forEach(item => {
                itemVision(item)
            })
        } else if (priceRange.value >= books[i].price
            && languageRadioBtn1.checked == true
            && authorCheckBox.checked == false
            && books[i].language == "russian"
            && books[i].name.toLowerCase().includes(textWoutMultiDot.toLowerCase())) {
            foundBooks.push(bookDivs[i]);
            foundBooks.forEach(item => {
                itemVision(item)
            })
        } else if (priceRange.value >= books[i].price
            && languageRadioBtn3.checked == true
            && authorCheckBox.checked == true
            && books[i].author.toLowerCase().includes(textWoutMultiDot.toLowerCase())) {
            foundBooks.push(bookDivs[i]);
            foundBooks.forEach(item => {
                itemVision(item)
            })
        } else if (priceRange.value >= books[i].price
            && languageRadioBtn2.checked == true
            && authorCheckBox.checked == true
            && books[i].language == "english"
            && books[i].author.toLowerCase().includes(textWoutMultiDot.toLowerCase())) {
            foundBooks.push(bookDivs[i]);
            foundBooks.forEach(item => {
                itemVision(item)
            })
        } else if (priceRange.value >= books[i].price
            && languageRadioBtn1.checked == true
            && authorCheckBox.checked == true
            && books[i].language == "russian"
            && books[i].author.toLowerCase().includes(textWoutMultiDot.toLowerCase())) {
            foundBooks.push(bookDivs[i]);
            foundBooks.forEach(item => {
                itemVision(item)
            })
        }
    }
})

function itemVision(item) {
    item.style.display = "grid";
}

// Section
let sectionContainer = document.createElement('section');
sectionContainer.className = 'section';
document.body.appendChild(sectionContainer);
// sectionContainer.style.display = "none";

let globalContainerSection = document.createElement('div');
globalContainerSection.className = "container";
sectionContainer.appendChild(globalContainerSection);

// Form 
let bookForm = document.createElement('form');
bookForm.id = "book-form";
bookForm.className = "section-book-form";
globalContainerSection.appendChild(bookForm);

// Form Group
let formGroup = document.createElement('div');
formGroup.className = "form-group";
bookForm.appendChild(formGroup);

// Title
let titleLabel = document.createElement('label');
titleLabel.setAttribute("for", "title");
titleLabel.innerHTML = "Title";
formGroup.appendChild(titleLabel);

let titleInput = document.createElement('input');
titleInput.id = "title";
titleInput.setAttribute("type", "text");
titleInput.className = "form__control"
formGroup.appendChild(titleInput);

// Form Group 2
let formGroup2 = document.createElement('div');
formGroup2.className = "form-group";
bookForm.appendChild(formGroup2);

// author
let authorLabel = document.createElement('label');
authorLabel.setAttribute("for", "author");
authorLabel.innerHTML = "Author";
formGroup2.appendChild(authorLabel);

let authorInput = document.createElement('input');
authorInput.id = "author";
authorInput.setAttribute("type", "text");
authorInput.className = "form__control"
formGroup2.appendChild(authorInput);

// Form Group 3
let formGroup3 = document.createElement('div');
formGroup3.className = "form-group";
bookForm.appendChild(formGroup3);

// isbn
let isbnLabel = document.createElement('label');
isbnLabel.setAttribute("for", "isbn");
isbnLabel.innerHTML = "isbn#";
formGroup3.appendChild(isbnLabel);

let isbnInput = document.createElement('input');
isbnInput.id = "isbn";
isbnInput.setAttribute("type", "text");
isbnInput.className = "form__control"
formGroup3.appendChild(isbnInput);

let submitBtn = document.createElement('input');
submitBtn.setAttribute("type", "submit");
submitBtn.setAttribute("value", "Add book");
submitBtn.className = "submit__btn";
bookForm.appendChild(submitBtn);

// Grid
let sectionTable = document.createElement('div');
sectionTable.className = "section-grid";
globalContainerSection.appendChild(sectionTable);

let sectionTableTitle = document.createElement('ul');
sectionTableTitle.className = "grid__title";
sectionTableTitle.innerHTML = "Title"
sectionTable.appendChild(sectionTableTitle);

let sectionTableAuthor = document.createElement('ul');
sectionTableAuthor.className = "grid__title";
sectionTableAuthor.innerHTML = "Author"
sectionTable.appendChild(sectionTableAuthor);

let sectionTableIsbn = document.createElement('ul');
sectionTableIsbn.className = "grid__title";
sectionTableIsbn.innerHTML = "Isbn"
sectionTable.appendChild(sectionTableIsbn);

let sectionDelete = document.createElement('ul');
sectionDelete.className = "grid__title";
sectionDelete.innerHTML = "Delete";
sectionTable.appendChild(sectionDelete);

// OOP CLASSES 

// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: "Book One",
                author: "Islom",
                isbn: "32244",
            },
            {
                title: "Book Two",
                author: "Islom",
                isbn: "45455",
            },
        ];

        const books = StoredBooks;

        books.forEach(book => UI.addBookToList(book));
    }

    static addBookToList(book) {
        // Title
        const listTitle = document.createElement('li');
        sectionTableTitle.appendChild(listTitle);
        listTitle.innerHTML = `${book.title}`;

        // Author
        const listAuthor = document.createElement('li');
        sectionTableAuthor.appendChild(listAuthor);
        listAuthor.innerHTML = `${book.author}`;

        // Isbn
        const listIsbn = document.createElement('li');
        sectionTableIsbn.appendChild(listIsbn);
        listIsbn.innerHTML = `${book.isbn}`

        // Delete BTN
        const listDelete = document.createElement('li');
        sectionDelete.appendChild(listDelete);

        const deleteBookBtn = document.createElement('a');
        listDelete.appendChild(deleteBookBtn);
        deleteBookBtn.setAttribute("href", "#");
        deleteBookBtn.className = "delete"
        deleteBookBtn.innerHTML = "X"
    }

    static deleteBook(target) {
        target.remove("li");
    }

    static clearFields() {
        titleInput.value = "";
        authorInput.value = "";
        isbnInput.value = "";
    }
}

// Store Class: Handles Storage

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a book
bookForm.addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();

    // Get Form Values
    const title = titleInput.value;
    const author = authorInput.value;
    const isbn = isbnInput.value;

    // Instatiate book
    const book = new Book(title, author, isbn);

    // Add Book to UI
    UI.addBookToList(book);

    // Clear Fields
    UI.clearFields();
})

// Event: Remove a Book

sectionTableTitle.addEventListener('click', e => {
    UI.deleteBook(e.target);
    e.stopPropagation();
    console.log(e.target, "Title")
})

sectionTableAuthor.addEventListener('click', e => {
    UI.deleteBook(e.target);
    e.stopPropagation();
    console.log(e.target, "Author")
})

sectionTableIsbn.addEventListener('click', e => {
    UI.deleteBook(e.target);
    e.stopPropagation();
    console.log(e.target, "isbn");
})

sectionDelete.addEventListener('click', e => {
    UI.deleteBook(e.target);
    e.stopPropagation();
    console.log(e.target, "Delete")
})







// OOP END



// Footer 
let footerContainer = document.createElement('footer');
footerContainer.className = "footer";
document.body.appendChild(footerContainer);

let globalContainer3 = document.createElement('div');
globalContainer3.className = "container";
footerContainer.appendChild(globalContainer3);

let footerParagraph = document.createElement('p');
footerParagraph.className = "footer__paragraph";
footerParagraph.innerHTML = "2022";
globalContainer3.appendChild(footerParagraph);

let footerLink = document.createElement('a');
footerLink.setAttribute("href", "https://github.com/islom-sattorov");
footerLink.className = "footer__link";
footerLink.innerHTML = "GIT";
footerParagraph.appendChild(footerLink);




// Array
// map 
// filter

// Array / String
// includes


// let numbers = [4, 6, 8, 9, 5, 10];

// //map
// // numbers = numbers.map((item, idx, arr) => {
// //     return item * 2;
// // })

// // filter
// // numbers = numbers.filter((item, idx, arr) => {
// //     return item % 2 == 0;
// // })


// let strings = ['Hello', 'Hi', 'Hey', 'Ooops']

// // includes
// // strings = strings.includes('Hi')

// // let count = 0;

// // strings.map((item) => {
// //     if (item.includes('H')) {
// //         count++
// //     }
// //     return item;
// // })

// // console.log(count)

// books = books.map((item) => {
//     let newItem = item;
//     newItem.price = Number(newItem.price) + 20;
//     return newItem;
// })

// let filterBooks = books.filter((item) => {
//     return item.price > 100 && item.price < 500;
// })

// let text = 'Гарри'

// let findBook = books.filter((item) => {
//     return item.name.includes('а');
// })





// // let btn = document.createElement('button');
// // btn.innerHTML = 'Send';


