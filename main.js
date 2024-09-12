class Book{
    constructor(title, year, author){
        this.title = title;
        this.year = year;
        this.author = author
    }
}

class Library{
    constructor(){
        this.books = [];
    }

    addBook(book){
        this.books.push(book);
        console.log(`The book ${book.title} add to library!`);
    }

    listBooks() {
        if(this.books.length === 0) {
            console.log("Library is empty!");
            return;
        }
    
        console.log("List of books in this library:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1} Title: ${book.title}, Author: ${book.author}, Year of druk: ${book.year}`);
        });
    }
}

const library = new Library ();

const book1 = new Book ('Harry Potter and the Philosofers stone', '1997', 'J. K. Rowling',);
const book2 = new Book ('Harry Potter and the Philosofers stone', '1997', 'J. K. Rowling',);
const book3 = new Book ('Harry Potter and the Philosofers stone', '1997', 'J. K. Rowling',);
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.listBooks();

