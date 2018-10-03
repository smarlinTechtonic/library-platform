function Book(oBook) {
  this.title = oBook.title;
  this.author = oBook.author;
  this.numPages = oBook.numPages;
  this.pubDate = oBook.pubDate;
};

Book.prototype.editBook = function(oBook) {

};

var firstBook = new Book ({title: "The Glass Castle", author: "Jeannette Walls", numPages: 288, pubDate: "March 14th 2005"});
var secondBook = new Book ({title: "Little Fires Everywhere", author: "Celeste Ng", numPages: 338, pubDate: "September 12th 2017"});
var thirdBook = new Book ({title: "Into the Water", author: "Paula Hawkins", numPages: 386, pubDate: "May 2nd 2017"});
var fourthBook = new Book ({title: "The Radium Girls: The Dark Story of America's Shining Women", author: "Kate Moore", numPages: 496, pubDate: "May 2nd 2017"});
var fifthBook = new Book ({title: "Before We Were Yours", author: "Lisa Wingate", numPages: 342, pubDate: "June 6th 2017"});
