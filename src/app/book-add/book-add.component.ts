import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent {
  constructor(private bookService : BookService, private router : Router){}

  addBook(f : NgForm){
    //console.log(f);
    const newBook = new Book(
      this.bookService.getLastId() + 1, 
      f.value.title, 
      f.value.author, 
      f.value.price)

    this.bookService.addBook(newBook);
    this.router.navigate(['/books', 'list']);

  }

}
