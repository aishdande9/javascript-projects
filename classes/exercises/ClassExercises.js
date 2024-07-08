// Define your Book class here:
class Book {
  constructor(
    title,
    author,
    copyright,
    isbn,
    pages,
    timesCheckedOut,
    discarded
  ) {
    this.title = title;
    this.author = author;
    this.copyright = copyright;
    this.isbn = isbn;
    this.pages = pages;
    this.timesCheckedOut = timesCheckedOut;
    this.discarded = discarded;
  }

  checkout(uses = 1) {
    return (this.timesCheckedOut += uses);
  }
}

class Manual extends Book {
  constructor(
    title,
    author,
    copyright,
    isbn,
    pages,
    timesCheckedOut,
    discarded
  ) {
    super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
  }

  dispose(currentYear) {
    if (currentYear - this.copyright > 5) {
      this.discarded = "Yes";
    }
  }
}

class Novel extends Book {
  constructor(
    title,
    author,
    copyright,
    isbn,
    pages,
    timesCheckedOut,
    discarded
  ) {
    super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
  }

  dispose() {
    if (this.timesCheckedOut > 100) {
      return (this.discarded = "Yes");
    }
  }
}

// Define your Manual and Novel classes here:

// Declare the objects for exercises 2 and 3 here:
const novelBook = new Novel(
  "Pride and Prejudice",
  "Jane Austen",
  1813,
  1111111111111,
  432,
  32,
  "No"
);

// Code exercises 4 & 5 here:
const manualBook = new Manual(
  "Top Secret Shuttle Building Manual",
  "Redacted",
  2013,
  "00000000",
  1147,
  1,
  "NO"
);
console.log(novelBook);

console.log(manualBook);

console.log("manualBookCheckOutDetails: " + manualBook.checkout());
console.log(manualBook);
const currentYear = 2024;
manualBook.dispose(currentYear);
console.log(manualBook);
