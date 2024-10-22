import { Book } from './book.js';

export class EBook extends Book {
    constructor(name, author, year, format) {
        super(name, author, year);
        this._format = format;
    }

    get format() {
        return this._format;
    }

    set format(value) {
        if (typeof value !== 'string') {
            throw new Error('Формат повинен бути рядком');
        }
        this._format = value;
    }

    printInfo() {
        return `${this.name} ${this.author}, ${this.year}, Формат: ${this.format}`;
    }

    static createEBookFromBook(book, format) {
        if (!(book instanceof Book)) {
            throw new Error('Вхідний аргумент повинен бути екземпляром класу Book');
        }
        return new EBook(book.name, book.author, book.year, format);
    }
}
