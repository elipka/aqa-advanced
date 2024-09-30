import { Book } from './book.js';
import { EBook } from './ebook.js';

const book1 = new Book("Jane Air", "Bronte", 1847);
const book2 = new EBook("Rebekka", "Maurier", 1938, "epub");
const book3 = new EBook("Alice in Wonderland", "Carrol", 1960, "fb2");
const book4 = new Book("1984", "Orwell", 1949);
const book5 = new Book("Harry Potter", "JR", 1999);

console.log(book1.printInfo());
console.log(book2.printInfo());
console.log(book3.printInfo());

const books = [book1, book2, book3, book4, book5];

const oldestBook = Book.findOldestBook(books);
console.log("Найдавніша книга:", oldestBook.printInfo());

const newEBook = EBook.createEBookFromBook(book1, "pdf");
console.log("Створена електронна книга:", newEBook.printInfo());
