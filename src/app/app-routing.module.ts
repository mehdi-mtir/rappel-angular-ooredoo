import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAddComponent } from './book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [
  {path : 'books/list', component : BookListComponent},
  {path : 'books/add', component : BookAddComponent},
  {path : 'books/edit/:id', component : BookEditComponent},
  {path : '', redirectTo : 'books/list', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
