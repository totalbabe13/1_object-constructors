

let   myLibrary = [];
const cardsContainer = document.querySelector(".cardsContainer");
let   submitBookForm = document.getElementById("book-form");
      submitBookForm.addEventListener("submit", getFormInput);


document.getElementById("plus").addEventListener("click",function(){
document.querySelector(".modal").style.display = 'flex';
});

document.getElementById("cancel").addEventListener("submit",function(){
  document.querySelector(".modal").style.display = 'none';
})

function getFormInput(event) {
  //console.log(this); !!LOOK:
  //this inside this function points at the HTML element that has event listener(FORM)
  event.preventDefault();
  let currentTitle  = this.querySelector('[name=title-x]').value;
  let currentAuthor = this.querySelector('[name=author-x]').value;
  let currentPages  = this.querySelector('[name=pages-x]').value;
  const userBook = new Book(currentTitle,currentAuthor,currentPages);
  addBookToLibrary(userBook);
  document.querySelector(".modal").style.display = 'none';
  formatBookObject();
};

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


function formatBookObject() {
// console.log(myLibrary[0]);
myLibrary.forEach(function(book) {

  let bookCard = document.createElement("div");
    bookCard.className = "bookCard";
    cardsContainer.appendChild(bookCard);
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
// < - - Pages ELEMENT - - >
  let bookPagesContainer = document.createElement("div");
  let actualPages = document.createElement("span");
    bookPagesContainer.className = "pagesContainer";
    actualPages.className = "pages-tag";
    bookCard.appendChild(bookPagesContainer);
    bookPagesContainer.appendChild(actualPages);
    actualPages.textContent = `${book.num_page} pages`;

  // let bookReadContainer = document.createElement("div");
  // let actualRead = document.createElement("span");
  //   bookReadContainer.className = "readContainer";
  //   actualRead.className = "readCard";
  //   bookCard.appendChild(bookReadContainer);
  //   bookReadContainer.appendChild(actualRead);
  //   actualRead.textContent = `Have read: ${book.have_read}`;

  });
};

//const bookTest = new Book("The Hobbit","J.R.R.","295 pages","not read yet")
