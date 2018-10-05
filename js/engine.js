//SINGLETON
(function() {
  var instance;
  Library = function() {
    if (instance) { //if a instance of library already exists this will point the newly made library to the Singleton instance
      return instance;
    }
    this.bookShelf = new Array();
    instance = this; //if a instance of library does not yet exist this will get and set the instance name for the new library
  }
})();

//Function to add a book. If title already exists in bookshelf, will return false
Library.prototype.addBook = function(book) {
  for (var i = 0; i < this.bookShelf.length; i++){
    if(this.bookShelf[i].title.toLowerCase() === book.title.toLowerCase()){
      return false;
    }
  }
  this.bookShelf.push(new Book(book));
  this.upDateState();
  return true;
};

//Function to remove a book by title. Will match partial words and remove all. If no match, will return false
Library.prototype.removeBookByTitle = function(fragment){
  if(this.bookShelf.filter(function(item){
    return item.title.toLowerCase().indexOf(fragment.toLowerCase()) > -1}).length === 0){
    return false;
  } else {
    this.bookShelf = this.bookShelf.filter(item => item.title.toLowerCase().indexOf(fragment.toLowerCase()) === -1);
    this.upDateState();
    return true;
  }
}

//Function to remove a book by author. Will match all authors and remove all. If no match, will return false
Library.prototype.removeBookByAuthor = function(author) {
  if(this.bookShelf.filter(function(item){
    return item.author.toLowerCase() === author.toLowerCase()}).length === 0){
    return false;
  } else {
    this.bookShelf = this.bookShelf.filter(function(item){
    return item.author.toLowerCase() !== author.toLowerCase()});
    this.upDateState();
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

//Searches for any part of the title and returns the books
Library.prototype.getBookByTitle = function(title) {
  if(this.bookShelf.filter(item => item.title.toLowerCase().indexOf(title.toLowerCase()) > -1).length === 0){
    return [];
  } else {
  return this.bookShelf.filter(item => item.title.toLowerCase().indexOf(title.toLowerCase()) > -1);
  }
};

//matches author of books to any string provided and shows all books that match
Library.prototype.getBookByAuthor = function(author){
  if(this.bookShelf.filter(item => item.author.toLowerCase().indexOf(author.toLowerCase()) !== -1).length < 1){
    return [];
  } else {
  return this.bookShelf.filter(item => item.author.toLowerCase().indexOf(author.toLowerCase()) !== -1);
  }
};

//Add multiple books
Library.prototype.addBooks = function(aBooks) {
  var booksAdded = 0;
  var oThis = this;
  aBooks.forEach(function(book) {
      oThis.addBook(new Book(book));
      booksAdded++;
    });
  this.upDateState();
  return booksAdded;
};

// Get all authors in library and return as an array
Library.prototype.getAuthors = function() {
  var authors = this.bookShelf.map(item => item.author);
  var newObj = {};
  for(var i = 0; i < authors.length; i++) {
    newObj[authors[i]] ? newObj[authors[i]]++ : newObj[authors[i]] = 1;
  }
  var noDupAuthors = Object.keys(newObj);
  return noDupAuthors;
}

//Get a random author
Library.prototype.getRandomAuthorName = function() {
  var num = Math.floor(Math.random() * this.bookShelf.length);
  return this.bookShelf[num].author;
};

//Searches either title OR author for a given keyword
Library.prototype.searchAll = function(key) {
  var foundArr = [];
    for (var i = 0; i < this.bookShelf.length; i++) {
        if (this.bookShelf[i].title.indexOf(key) > -1) {
            foundArr[i] = this.bookShelf[i];
        }
        if (!foundArr[i] && this.bookShelf[i].author.indexOf(key) > -1) {
            foundArr[i] = (this.bookShelf[i]);
        }
    }
    return foundArr;
}

//search a specific key value pair in the bookShelf Array
Library.prototype.findBookByKeyValue = function(key, value) {
  var aFoundBooks = [];
    for (var i = 0; i < this.bookShelf.length; i++) {
        if (this.bookShelf[i][key] === value) {
          aFoundBooks.push(this.bookShelf[i]);
        }
    }
    return aFoundBooks;
}

Library.prototype.upDateState = function() {
  window.localStorage.setItem("data", JSON.stringify(this.bookShelf));
}

Library.prototype.loadLib = function() {
  var books = JSON.parse(localStorage.getItem("data"));
  if(books){
    this.addBooks(books);
  };
}

document.addEventListener("DOMContentLoaded", function(e) {
    window.gLibrary = new Library();
    gLibrary.loadLib();
});

// var myBooksArr = [{title: "The Martian", author: "Andy Weir", numPages: 369, pubDate: "February 11th 2014"},{title: "American Kingpin: The Epic Hunt for the Criminal Mastermind Behind the Silk Road", author: "Nick Bilton"}];
