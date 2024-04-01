import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';
  private randomBooksUrl = 'https://www.googleapis.com/books/v1/volumes?q=+intitle:""';

  constructor(private http: HttpClient) { }

  searchBooks(query: string): Observable<any> {
    const url = `${this.apiUrl}?q=${query}`;
    return this.http.get(url);
  }

  getBookDetails(bookId: string): Observable<any> {
    const url = `${this.apiUrl}/${bookId}`;
    return this.http.get(url);
  }

  getRandomBooks(): Observable<any> {
    return this.http.get(this.randomBooksUrl);
  }
}
