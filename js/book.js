function Book(oBook) {
  this.title = oBook.title;
  this.author = oBook.author;
  this.numPages = oBook.numPages;
  this.pubDate = new Date(oBook.pubDate);
};
//check that title does not already exist
Book.prototype.editBook = function(oBook) {
  for (let elem of gLibrary.bookShelf){
    if(oBook.title === elem.title){
      console.log("That title is already in the book shelf");
      return false;
    }
    this.title = oBook.title || this.title;
  }
  this.author = oBook.author || this.author;
  this.numPages = oBook.numPages || this.numPages;
  this.pubDate = oBook.pubDate || this.pubDate;
  gLibrary.upDateState();
  return this;
};

// var firstBook = {title: "The Glass Castle", author: "Jeannette Walls", numPages: "288", pubDate: "2011-10-10"};
// var secondBook = {title: "Little Fires Everywhere", author: "Celeste Ng", numPages: 338, pubDate: "2017-9-12"});
// var thirdBook = new Book ({title: "Into the Water", author: "Paula Hawkins", numPages: 386, pubDate: "2017-5-2"});
// var fourthBook = new Book ({title: "The Radium Girls: The Dark Story of America's Shining Women", author: "Kate Moore", numPages: 496, pubDate: "2017, 12, 31"});
// var fifthBook = new Book ({title: "Before We Were Yours", author: "Lisa Wingate", numPages: 342, pubDate: "2017, 6, 18"});
