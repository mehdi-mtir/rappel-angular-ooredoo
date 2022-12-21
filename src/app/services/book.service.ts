import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private _books = [
    new Book(1, "Power of Habits", "Charles Duhigg", 35),
    new Book(2, "The slight edge", "Jeff Olsen", 40),
    new Book(3, "The one thing", "Gary W. Keller", 25)
  ]

  booksListEdited = new Subject<Book[]>()

  constructor() { }

  getBooks() : Book[]{
    return [...this._books];
  }

  addBook(book : Book){
    this._books = [...this._books, book];
  }

  getLastId():number{
    return this._books[this._books.length - 1].id
  }

  getBookById(id : number) : Book{
    return this._books.find(
        book => book.id === id
      ) as Book
  }

  editBook(book : Book){
    this._books = this._books.map(
      b => {
        if(b.id === book.id)
          return book;
        else
          return b;
      }
    )
  }

  deleteBook(id : number){
    this._books = this._books.filter(
      book=>book.id !== id
    )
    this.booksListEdited.next([...this._books]);
    console.log(this._books);
  }
}
