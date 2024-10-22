export class Book {
    constructor(name, author, year) {
        this._name = name;
        this._author = author;
        this._year = year;
    }

    get name() {
        return this._name;
    }

    get author() {
        return this._author;
    }

    get year() {
        return this._year;
    }

    set name(value) {
        if (typeof value !== 'string') {
            throw new Error('Назва повинна бути рядком');
        }
        this._name = value;
    }

    set author(value) {
        if (typeof value !== 'string') {
            throw new Error('Автор повинен бути рядком');
        }
        this._author = value;
    }

    set year(value) {
        if (typeof value !== 'number' || value < 0) {
            throw new Error('Рік видання повинен бути додатнім числом');
        }
        this._year = value;
    }

    printInfo() {
        return `${this.name} ${this.author}, ${this.year}`;
    }

    static findOldestBook(books) {
        return books.reduce((oldest, book) => {
            return (book.year < oldest.year) ? book : oldest;
        });
    }
}
