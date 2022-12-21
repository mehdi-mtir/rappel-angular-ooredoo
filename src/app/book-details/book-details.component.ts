import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  @Input() book : Book;
  @Output() closeEvent = new EventEmitter<number>();

  closeDetails(){
    this.closeEvent.emit(0);
  }

}
