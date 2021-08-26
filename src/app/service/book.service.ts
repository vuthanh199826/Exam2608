import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/book';
const API_URL = `${environment.apiUrl1}`;
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(API_URL);
  }
  create(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(API_URL, book);
  }
  deleteById(id: number): Observable<Book> {
    return this.httpClient.delete<Book>(`${API_URL}/${id}`);
  }
  getById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${API_URL}/${id}`);
  }
  updateById(id: number, book: Book): Observable<Book> {
    return this.httpClient.put<Book>(`${API_URL}/${id}`, book);
  }
}
