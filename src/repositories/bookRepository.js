import { executeSql } from '../helpers/dbHelper.js';
import Book from '../models/book.js';

export default class BookRepository {

    async getAllBooks() {
        // throw "book repository all books query not yet implemented"
        // TODO implement
        let allbookSQL = await executeSql('SELECT * FROM books')

        let allbook = allbookSQL.recordset; {
            if (allbook.length < 1) {
                return null;
            }
        }
        return allbook;
    }

    async getBookById(id) {
        console.log("get book " + id);
        let result = await executeSql('SELECT * FROM books WHERE id = @bookid', { 'bookid': id })

        let books = result.recordset;
        if (books.length < 1) {
            return null;
        }

        let book = books[0];
        return new Book(book.id, book.title, book.author, book.isbn);

    }

    addBook(book) {
        // throw "add book not implemented"
        //TODO implement, need to find id of inserted book
        // INSERT INTO books(title, author, isbn) OUTPUT Inserted.title, Inserted.author, Inserted.ID VALUES('This is my Insert and Return Test', 'Tom Porter', 'NULL')
    }


}
