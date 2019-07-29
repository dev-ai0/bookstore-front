import { Component, OnInit } from '@angular/core';
import {Book, BookService} from '../service';

@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html',
  styles: [],
  providers:[BookService]
})
export class BookListComponent implements OnInit {

  nbBooks: number;
  books: Book[];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.countBooks().subscribe(nbBooks => this.nbBooks = nbBooks);
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

}
