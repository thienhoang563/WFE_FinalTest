import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  readonly API_URL = 'http://localhost:3000';
  constructor(
    private httpClient: HttpClient
  ) { }
  getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.API_URL + '/books');
  }
  create(book: Book) {
    return this.httpClient.post(`${this.API_URL + '/books'}`, book);
  }
}
