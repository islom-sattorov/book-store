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
sectionContainer.style.display = "none";

let globalContainerSection = document.createElement('div');
globalContainerSection.className = "container";
sectionContainer.appendChild(globalContainerSection);

let sectionParagraph = document.createElement('p');
sectionContainer.innerHTML = "123u912893819083901283912089031";
globalContainerSection.appendChild(sectionParagraph);



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


