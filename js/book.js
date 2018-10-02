function Book(title, author, numPages, pubDate) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.pubDate = pubDate;
};

Book.prototype.editBook = function(oBook) {

};

var firstBook = new Book ("The Glass Castle", "Jeannette Walls", 288, "March 14th 2005");
var secondBook = new Book ("Little Fires Everywhere", "Celeste Ng", 338, "September 12th 2017");
var thirdBook = new Book ("Into the Water ", "Paula Hawkins", 386, "May 2nd 2017");
var fourthBook = new Book ("The Radium Girls: The Dark Story of America's Shining Women", "Kate Moore", 496, "May 2nd 2017");
var fifthBook = new Book ("Before We Were Yours", "Lisa Wingate", 342, "June 6th 2017");
