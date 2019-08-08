// Write a constructor for making “book” objects.
// We will revisit this in the project at the end of this lesson.
// Your book objects should have
// the book’s title,
// author,
// the number of pages,
// and whether or not you have read the book

function Book(title, author, num_page, have_read) {
  this.title     = title
  this.author    = author
  this.num_page  = num_page
  this.have_read = have_read
}
