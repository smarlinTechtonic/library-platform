function Library() {
  this.bookShelf = new Array();
};

//Function to add a book. If title already exists in bookshelf, will return false
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
Library.prototype.removeBookByTitle = function(fragment){
  if(this.bookShelf.filter(function(item){
    return item.title.indexOf(fragment) > -1}).length === 0){
    return false;
  } else {
    this.bookShelf = this.bookShelf.filter(item => item.title.indexOf(fragment) === -1);
    return true;
  }
}
// ES6 arrows
// Library.prototype.removeBookByTitle = function(title) {
//   if(this.bookShelf.filter(item => item.title.indexOf(title) > -1).length===0){
//     return false;
//   } else {
//     this.bookShelf = this.bookShelf.filter(item => item.title.indexOf(title) === -1);
//     return true;
//   }
// };


//Function to remove a book by author. Will match all authors and remove all. If no match, will return false
Library.prototype.removeBookByAuthor = function(author) {
  if(this.bookShelf.filter(function(item){
    return item.author === author}).length === 0){
    return false;
  } else {
    this.bookShelf = this.bookShelf.filter(function(item){
    return item.author !== author});
    return true;
  }
}

// ES6
// Library.prototype.removeBookByAuthor = function(author) {
//   if(this.bookShelf.filter(elem => elem.author === author).length === 0){
//     return false;
//   } else {
//     this.bookShelf = this.bookShelf.filter(elem => elem.author !== author);
//     return true;
//   }
// }

//Generates a random number between 0 and the length of the array and returns that array item
Library.prototype.getRandomBook = function() {
  if(this.bookShelf.length === 0){
    return null;
  }
  var num = Math.floor(Math.random() * this.bookShelf.length);
  return this.bookShelf[num];
};

//Searches for any part of the title and returns the books
Library.prototype.getBookByTitle = function(title) {
  if(this.bookShelf.filter(item => item.title.indexOf(title) > -1).length === 0){
    return [];
  } else {
  return this.bookShelf.filter(item => item.title.indexOf(title) > -1);
  }
};

//matches to any string provided and shows all books that match
Library.prototype.getBookByAuthor = function(author){
  if(this.bookShelf.filter(item => item.author.indexOf(author) !== -1).length < 1){
    return [];
  } else {
  return this.bookShelf.filter(item => item.author.indexOf(author) !== -1);
  }
};

//Add multiple books
Library.prototype.addBooks = function(aBooks) {
  var booksAdded = 0;
  var oThis = this;
  aBooks.forEach(function(book) {
      var bookToAdd = new Book(book);
      oThis.bookShelf.push(bookToAdd);
      booksAdded++;
    });
  return booksAdded;
};

//  Using ES6!
//  Library.prototype.addBooks = function(aBooks) {
//   var booksAdded = 0;
//   console.log("just before the forEach loop");
//   aBooks.forEach(book => {
//       var bookToAdd = new Book(book);
//       this.bookShelf.push(bookToAdd);
//       booksAdded++;
//     });
//   return booksAdded;
// };

Library.prototype.getAuthors = function() {
  var authors = this.bookShelf.map(item => item.author);
  console.log(authors);
  return authors;
};

Library.prototype.getRandomAuthorName = function() {
  var num = Math.floor(Math.random() * this.bookShelf.length);
  return this.bookShelf[num].author;
};

document.addEventListener("DOMContentLoaded", function(e) {
  window.gLibrary = new Library();
  gLibrary.addBook(firstBook);
  gLibrary.addBook(secondBook);
  gLibrary.addBook(thirdBook);
  gLibrary.addBook(fourthBook);
  gLibrary.addBook(fifthBook);
});

var myBooksArr = [{title: "The Martian", author: "Andy Weir", numPages: 369, pubDate: "February 11th 2014"},{title: "American Kingpin: The Epic Hunt for the Criminal Mastermind Behind the Silk Road", author: "Nick Bilton"}];
