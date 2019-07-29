import { Component, OnInit } from '@angular/core';
import {Book, BookService} from '../service';
import {Router} from '@angular/router';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'bs-book-form',
  templateUrl: './book-form.component.html',
  styles: []
})
export class BookFormComponent implements OnInit {

  book: Book = new class implements Book {
    description: string;
    id: number;
    imageUrl: string;
    isbn: string;
    language: Book.LanguageEnum;
    nbOfPages: number;
    publicationDate: Date;
    title: string;
    unitCost: number;
  };

  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit() {

  }

  create() {

    this.bookService.createBook(this.book).pipe(
      finalize( () => this.router.navigate(['/book-list']))
    ).subscribe();


  }
}
