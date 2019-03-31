import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-sachdadoc',
  templateUrl: './sachdadoc.component.html',
  styleUrls: ['./sachdadoc.component.sass']
})
export class SachdadocComponent implements OnInit {
  bookList: Book[] = [];
  constructor(
    private bookService: BookService,
  ) { }
  ngOnInit() {
    this.getBooks();
  }
  getBooks() {
    this.bookService.getAll().subscribe(data =>
    this.bookList = data.filter(book => book.read === false));
}
}
