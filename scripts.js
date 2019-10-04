

let myLibrary = [];
let submitBookForm = document.getElementById("book-form");
submitBookForm.addEventListener("submit", getFormInput);

function getFormInput(event) {
  //console.log(this); !!LOOK:
  //this inside this function points at the HTML element that has event listener(FORM)
  event.preventDefault();
  let currentTitle  = this.querySelector('[name=title-x]').value;
  let currentAuthor = this.querySelector('[name=author-x]').value;
  let currentPages  = this.querySelector('[name=pages-x]').value;
  let currentRead   = this.querySelector('[name=read-x]').value
  //console.log(` title is: ${currentTitle}, author is: ${currentAuthor}, pages is: ${currentPages}, have read? ${currentRead} `);
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
  myLibrary.push(userBook)
};

//const bookTest = new Book("The Hobbit","J.R.R.","295 pages","not read yet")
