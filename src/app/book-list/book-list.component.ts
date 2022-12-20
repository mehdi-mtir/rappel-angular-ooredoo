import { Component } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books = [
    new Book(1, "Power of Habits", "Charles Duhigg", 35),
    new Book(2, "The slight edge", "Jeff Olsen", 40),
    new Book(3, "The one thing", "Gary W. Keller", 25)
  ]

}
