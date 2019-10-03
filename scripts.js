

let myLibrary = [];

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

const bookTest = new Book("The Hobbit","J.R.R.","295 pages","not read yet")
bookTest.info();
