function Library() {
  this.bookShelf = new Array();

};
Library.prototype.addBook = function(book){
  this.bookShelf.push(book);
};

Library.prototype.removeBookByTitle = function(title){
  this.bookShelf.pop(this.bookShelf.filter(function(book){
    (book.title === title);
  }
))};

Library.prototype.removeBookByAuthor = function(author){};
Library.prototype.getRandomBook = function(){};
Library.prototype.getBookByTitle = function(title){};
Library.prototype.getBookByAuthor = function(author){};
Library.prototype.addBooks = function(books){};
Library.prototype.getAuthors = function(){};
Library.prototype.getRandomAuthorName = function(){};

document.addEventListener("DOMContentLoaded", function(e) {
  window.gLibrary = new Library();
  gLibrary.addBook(firstBook);
});
