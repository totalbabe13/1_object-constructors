// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//--> OBJECTS and Prototypes
let myLibrary = [];
let body = document.getElementById("body");
let addBookButton = document.getElementById("plus");
let modal = document.getElementById("modal");
let bookForm = document.getElementById('book-form');
let cardsContainer = document.getElementById("cardsContainer");
let saveButton = document.getElementById("save");
let cancelButton = document.getElementById("cancel");

function Book(title, author, num_page) {
    this.title = title
    this.author = author
    this.num_page = num_page
    this.have_read = false
};
Book.prototype.info = function() {
    return `${this.title}, ${this.author}, ${this.num_page}, ${this.have_read}.`
};

function addBookToLibrary(userBook) {
    myLibrary.push(userBook);
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//EVENT Listenners -->
addBookButton.addEventListener("click", showModal);
bookForm.addEventListener("submit", saveBook);
bookForm.addEventListener("reset", closeModal);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// MODAL open/closeModal
function showModal(event) {
    document.querySelector(".modal").style.display = 'flex';
};

function closeModal(event) {
    document.querySelector(".modal").style.display = 'none';
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//Edit Card info / toggle
function removeBook(book_id) {
    let card = document.getElementById(book_id).parentElement.parentElement
    let cardIndexNum = parseInt(card.dataset.index);
    let parentElement = document.getElementById(book_id).parentElement.parentElement.parentElement
    parentElement.removeChild(card);
    for (var i = 0; i < myLibrary.length; i++) {
        if (i === cardIndexNum) {
            myLibrary.splice(i, 1);
        }
    }
};

function toggleRead(book_id) {
    let card = document.getElementById(book_id).parentElement.parentElement
    let cardIndexNum = parseInt(card.dataset.index);
    console.log(cardIndexNum);
    for (var i = 0; i < myLibrary.length; i++) {
        if (i === cardIndexNum) {
            myLibrary[i].have_read = true;
        }
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// FORM display input/save object
function saveBook(event) {
    event.preventDefault();
    let currentTitle = this.querySelector('[name=title-x]').value;
    let currentAuthor = this.querySelector('[name=author-x]').value;
    let currentPages = this.querySelector('[name=pages-x]').value;
    const userBook = new Book(currentTitle, currentAuthor, currentPages);
    addBookToLibrary(userBook);
    document.querySelector(".modal").style.display = 'none';
    formatBookObject();
};

function formatBookObject() {
    let oldLib = document.getElementById("cardsContainer");
    body.removeChild(oldLib);
    let refreshlibrary = document.createElement("div");
    refreshlibrary.setAttribute("id", "cardsContainer");
    body.appendChild(refreshlibrary);

    myLibrary.forEach(function(book, index) {
        let bookCard = document.createElement("div");
        bookCard.className = "bookCard";
        bookCard.setAttribute("data-index", `${index}`)
        refreshlibrary.appendChild(bookCard);

        // < - - Title ELEMENT - - >
        let actualTitle = document.createElement("h2");
        let divider = document.createElement("p");

        actualTitle.className = "title-tag";
        divider.className = "divider"

        bookCard.appendChild(actualTitle);
        bookCard.appendChild(divider);
        actualTitle.textContent = `${book.title}`;
        divider.textContent = "___________"

        // < - - Author ELEMENT - - >
        let bookAuthorContainer = document.createElement("div");
        let actualAuthor = document.createElement("span");

        bookAuthorContainer.className = "authorContainer";
        actualAuthor.className = "author-tag";

        bookCard.appendChild(bookAuthorContainer);
        bookAuthorContainer.appendChild(actualAuthor);
        actualAuthor.textContent = `${book.author}`;

        // < - - Buttons ELEMENT - - >
        let buttonContainer = document.createElement("div");
        let readToggle = document.createElement("input")
        let openButton = document.createElement("button");
        let deleteButton = document.createElement("button");
        let openIcon = document.createElement('img');
        let deleteIcon = document.createElement('img');


        buttonContainer.className = "buttons-container";
        readToggle.className = "check-read"
        openButton.className = "open-book";
        deleteButton.className = "delete-book";
        openIcon.className = "open-icon";
        deleteIcon.className = "delete-icon";
        deleteButton.id = `id${index}`;
        readToggle.id = `id${index}`;

        bookCard.appendChild(buttonContainer);
        buttonContainer.appendChild(readToggle);
        buttonContainer.appendChild(openButton);
        buttonContainer.appendChild(deleteButton);
        openButton.appendChild(openIcon);
        deleteButton.appendChild(deleteIcon);

        readToggle.setAttribute('type', 'checkbox')
        readToggle.setAttribute('onclick', 'toggleRead(this.id)')
        openIcon.setAttribute("src", "images/open-book.svg")
        openButton.setAttribute("data-index", `${myLibrary.length}`)
        deleteIcon.setAttribute("src", "images/delete.svg")
        deleteButton.setAttribute('onclick', "removeBook(this.id)")


        // < - - Pages ELEMENT - - >
        let bookPagesContainer = document.createElement("div");
        let actualPages = document.createElement("span");

        bookPagesContainer.className = "pagesContainer";
        actualPages.className = "pages-tag";

        bookCard.appendChild(bookPagesContainer);
        bookPagesContainer.appendChild(actualPages);
        actualPages.textContent = `${book.num_page} pages`;
    });
};
