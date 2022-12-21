import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book! : Book;
  bookForm = new FormGroup({
    title : new FormControl('', Validators.required),
    author : new FormControl('', Validators.required),
    price : new FormControl(null)
  })

  constructor(
    private route : ActivatedRoute,
    private bookService : BookService,
    private router : Router){}

  editBook(){
    //console.log(this.bookForm);
    const editedBook = new Book(this.book.id, this.bookForm.value.title || '', this.bookForm.value.author || '', this.bookForm.value.price );
    this.bookService.editBook(editedBook);
    this.router.navigate(['/books', 'list']);
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      params=>{
        this.book = this.bookService.getBookById(+params['id']);
        console.log(this.book.author);
        this.bookForm.patchValue({
          title : this.book.title,
          author : this.book.author,
          price : this.book.price
        })
      }
      
    )
  }

}
