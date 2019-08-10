// Write a constructor for making “book” objects.
// We will revisit this in the project at the end of this lesson.
// Your book objects should have
// the book’s title,
// author,
// the number of pages,
// and whether or not you have read the book

let myLibrary = [];
function addBookToLibrary() {
  //myLibrary.push(book);
}

function Book(title, author, num_page, have_read) {
  this.title     = title
  this.author    = author
  this.num_page  = num_page
  this.have_read = have_read

  this.info = function() {
    return `${this.title}, ${this.author}, ${this.num_page}, ${this.have_read}.`
    // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
  }
}

// const bookTest = new Book("The Hobbit","J.R.R.","295 pages","not read yet")
// bookTest.info();
