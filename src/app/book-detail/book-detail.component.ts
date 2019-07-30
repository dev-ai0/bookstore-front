import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Book, BookService} from '../service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'bs-book-detail',
  templateUrl: './book-detail.component.html',
  styles: []
})
export class BookDetailComponent implements OnInit {

  book: Book = new class implements Book {
    description: string;
    id: number;
    imageUrl: string;
    isbn: string;
    language: string;
    nbOfPages: number;
    publicationDate: Date;
    title: string;
    unitCost: number;
  };
  
  constructor(private router: Router, private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      if(params['bookId']){
        this.bookService.getBook(params['bookId'])
          .subscribe(book => this.book = book);
      }
    })

  }

  delete(){
    this.bookService.deleteBook(this.book.id).pipe(
      finalize( () => this.router.navigate(['/book-list']))
    ).subscribe();
  }

}
