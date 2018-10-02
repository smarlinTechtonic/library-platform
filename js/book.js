function Book(title, author, numPages, pubDate) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.pubDate = pubDate;
};

Book.prototype.editBook = function(oBook) {

};

var firstBook = new Book ("The Glass Castle", "Jeannette Walls", 288, "March 2005");
