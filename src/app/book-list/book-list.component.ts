import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
  books : Book[] = [];
  activeBook : Book = null;

  constructor(private bookService : BookService){

  }

  deleteBook(id : number){
    if(confirm("Êtes-vous sûre de vouloir supprimer le livre?")){
      this.bookService.deleteBook(id);
    }
  }

  showDetails(id : number){
    if(id!==0)
      this.activeBook = this.bookService.getBookById(id);
    else
      this.activeBook = null;
    //console.log(this.activeBook);
  }

  ngOnInit(): void {
    this.bookService.booksListEdited.subscribe(
      editedBooks => this.books = editedBooks
    )
    this.books = this.bookService.getBooks();
  }

  ngOnDestroy(): void {
    this.bookService.booksListEdited.unsubscribe();
  }



}
