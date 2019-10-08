
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//--> OBJECTS and Prototypes
let   myLibrary      = [];
let   body           = document.getElementById("body");
let   addBookButton  = document.getElementById("plus");
let   modal          = document.getElementById("modal");
let   bookForm       = document.getElementById('book-form');
let   cardsContainer = document.getElementById("cardsContainer");
let   saveButton     = document.getElementById("save");
let   cancelButton   = document.getElementById("cancel");

function Book(title, author, num_page) {
  this.title     = title
  this.author    = author
  this.num_page  = num_page
  this.have_read = false
};
Book.prototype.info = function () {
  return `${this.title}, ${this.author}, ${this.num_page}, ${this.have_read}.`
};
function addBookToLibrary(userBook) {
  myLibrary.push(userBook);
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//EVENT Listenners -->
addBookButton.addEventListener("click",showModal);
bookForm.addEventListener("submit",saveBook);
bookForm.addEventListener("reset",closeModal);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// MODAL open/closeModal
function showModal(event){
  document.querySelector(".modal").style.display = 'flex';
};

function closeModal(event){
  document.querySelector(".modal").style.display = 'none';
}

// FORM display input/save object
function saveBook(event) {
  event.preventDefault();
  let   currentTitle  = this.querySelector('[name=title-x]').value;
  let   currentAuthor = this.querySelector('[name=author-x]').value;
  let   currentPages  = this.querySelector('[name=pages-x]').value;
  const userBook      = new Book(currentTitle,currentAuthor,currentPages);
  addBookToLibrary(userBook);
  document.querySelector(".modal").style.display = 'none';
   formatBookObject();
};

function formatBookObject() {
  let oldLib =  document.getElementById("cardsContainer");
  body.removeChild(oldLib);
  let refreshlibrary = document.createElement("div");
  refreshlibrary.setAttribute("id", "cardsContainer");
  body.appendChild(refreshlibrary);

  myLibrary.forEach(function(book) {
  let bookCard = document.createElement("div");

  bookCard.className = "bookCard";
  refreshlibrary.appendChild(bookCard);

// < - - Title ELEMENT - - >
  let actualTitle = document.createElement("h2");
  let divider     = document.createElement("p");

    actualTitle.className = "title-tag";
    divider.className     = "divider"

    bookCard.appendChild(actualTitle);
    bookCard.appendChild(divider);
    actualTitle.textContent = `${book.title}`;
    divider.textContent = "___________"

// < - - Author ELEMENT - - >
  let bookAuthorContainer = document.createElement("div");
  let actualAuthor        = document.createElement("span");

    bookAuthorContainer.className = "authorContainer";
    actualAuthor.className        = "author-tag";

    bookCard.appendChild(bookAuthorContainer);
    bookAuthorContainer.appendChild(actualAuthor);
    actualAuthor.textContent = `${book.author}`;

// < - - Buttons ELEMENT - - >
  let buttonContainer = document.createElement("div");
  let openButton      = document.createElement("button");
  let deleteButton    = document.createElement("button");
  let openIcon        = document.createElement('img');
  let deleteIcon      = document.createElement('img');

buttonContainer.className = "buttons-container";
openButton.className      = "open-book";
deleteButton.className    = "delete-book";
openIcon.className        = "open-icon";
deleteIcon.className      = "delete-icon";

bookCard.appendChild(buttonContainer);
buttonContainer.appendChild(openButton);
buttonContainer.appendChild(deleteButton);
openButton.appendChild(openIcon);
deleteButton.appendChild(deleteIcon);

openIcon.setAttribute("src","images/open-book.svg")
deleteIcon.setAttribute("src","images/delete.svg")

// < - - Pages ELEMENT - - >
  let bookPagesContainer = document.createElement("div");
  let actualPages        = document.createElement("span");

    bookPagesContainer.className = "pagesContainer";
    actualPages.className        = "pages-tag";

    bookCard.appendChild(bookPagesContainer);
    bookPagesContainer.appendChild(actualPages);
    actualPages.textContent = `${book.num_page} pages`;
  });
};

//const bookTest = new Book("The Hobbit","J.R.R.","295 pages","not read yet")
