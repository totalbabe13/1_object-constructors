

let   myLibrary = [];
const cardsContainer = document.querySelector(".cardsContainer");
let   submitBookForm = document.getElementById("bookForm");
      submitBookForm.addEventListener("submit", getFormInput);

function getFormInput(event) {
  //console.log(this); !!LOOK:
  //this inside this function points at the HTML element that has event listener(FORM)
  event.preventDefault();
  let currentTitle  = this.querySelector('[name=title-x]').value;
  let currentAuthor = this.querySelector('[name=author-x]').value;
  let currentPages  = this.querySelector('[name=pages-x]').value;
  let currentRead   = this.querySelector('[name=read-x]').value;

  const userBook = new Book(currentTitle,currentAuthor,currentPages,currentRead);
  console.log(userBook);
  addBookToLibrary(userBook);
};

function Book(title, author, num_page, have_read) {
  this.title     = title
  this.author    = author
  this.num_page  = num_page
  this.have_read = have_read
};

Book.prototype.info = function () {
  return `${this.title}, ${this.author}, ${this.num_page}, ${this.have_read}.`
};

function addBookToLibrary(userBook) {
  myLibrary.push(userBook);
};


function formatBookObject() {

// console.log(myLibrary[0]);
myLibrary.forEach(function(book) {

  let bookCard = document.createElement("div");
    bookCard.className = "bookCard";
    cardsContainer.appendChild(bookCard);

  let bookTitleContainer = document.createElement("div");
  let actualTitle = document.createElement("span");
    bookTitleContainer.className = "titleContainer";
    actualTitle.className = "titleCard";
    bookCard.appendChild(bookTitleContainer);
    bookTitleContainer.appendChild(actualTitle);
    actualTitle.textContent = `Title: ${book.title}`;

  let bookAuthorContainer = document.createElement("div");
  let actualAuthor = document.createElement("span");
    bookAuthorContainer.className = "authorContainer";
    actualAuthor.className = "authorCard";
    bookCard.appendChild(bookAuthorContainer);
    bookAuthorContainer.appendChild(actualAuthor);
    actualAuthor.textContent = `Author: ${book.author}`;

  let bookPagesContainer = document.createElement("div");
  let actualPages = document.createElement("span");
    bookPagesContainer.className = "pagesContainer";
    actualPages.className = "pagesCard";
    bookCard.appendChild(bookPagesContainer);
    bookPagesContainer.appendChild(actualPages);
    actualPages.textContent = `Num. of Pages: ${book.num_page}`;

  let bookReadContainer = document.createElement("div");
  let actualRead = document.createElement("span");
    bookReadContainer.className = "readContainer";
    actualRead.className = "readCard";
    bookCard.appendChild(bookReadContainer);
    bookReadContainer.appendChild(actualRead);
    actualRead.textContent = `Have read: ${book.have_read}`;

  });
};

//const bookTest = new Book("The Hobbit","J.R.R.","295 pages","not read yet")
