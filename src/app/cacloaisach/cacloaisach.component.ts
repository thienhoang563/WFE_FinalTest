import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cacloaisach',
  templateUrl: './cacloaisach.component.html',
  styleUrls: ['./cacloaisach.component.sass']
})
export class CacloaisachComponent implements OnInit {
  bookList: Book[] = [];
  formCreate = this.fb.group({
    name: [''],
    read: [true]
  });
  constructor(
    private bookService: BookService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllBooks();
  }
  getAllBooks() {
    return this.bookService.getAll().subscribe(data => (
      this.bookList = data));
  }
  readagain(i) {
  }
  addBook() {
    this.bookService.create(this.formCreate.value).subscribe(data => {
      console.log(data);
      this.router.navigate(['/danhsach']);
    });
    this.ngOnInit();
  }
}
