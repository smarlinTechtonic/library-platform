function Library() {
  this.bookShelf = new Array();
};

//Function to add a book. If title exists, will return false
Library.prototype.addBook = function(book) {
  for (var i = 0; i < this.bookShelf.length; i++){
    if(this.bookShelf[i].title === book.title){
      return false;
    }
  }
  this.bookShelf.push(book);
  return true;
};

//Function to remove a book by title. Will match partial words and remove all. If no match, will return false
Library.prototype.removeBookByTitle = function(title) {
  if(this.bookShelf.filter(item => item.title.indexOf(title) > -1).length===0){
    return false;
  } else {
    this.bookShelf = this.bookShelf.filter(item => item.title.indexOf(title) === -1);
    return true;
  }
};

//Function to remove a book by author. Will match all authors and remove all. If no match, will return false
Library.prototype.removeBookByAuthor = function(author) {
  if(this.bookShelf.filter(item => item.author === author).length === 0){
    return false;
  } else {
    this.bookShelf = this.bookShelf.filter(item => item.author !== author);
    return true;
  }
}

//Generates a random number between 0 and the length of the array and returns that array item
Library.prototype.getRandomBook = function() {
  if(this.bookShelf.length === 0){
    return null;
  }
  var num = Math.floor(Math.random() * this.bookShelf.length);
  return this.bookShelf[num];
};


Library.prototype.getBookByTitle = function(title) {};
Library.prototype.getBookByAuthor = function(author){};
Library.prototype.addBooks = function(books){};

Library.prototype.getAuthors = function() {
  var authors = this.bookShelf.map(item => item.author);
  console.log(authors);
  return authors;
};

Library.prototype.getRandomAuthorName = function() {};

document.addEventListener("DOMContentLoaded", function(e) {
  window.gLibrary = new Library();
  gLibrary.addBook(firstBook);
  gLibrary.addBook(secondBook);
  gLibrary.addBook(thirdBook);
  gLibrary.addBook(fourthBook);
  gLibrary.addBook(fifthBook);
});
