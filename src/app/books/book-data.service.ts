// book-data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {
  private booksSource = new BehaviorSubject<any[]>([]);
  books$ = this.booksSource.asObservable();

  constructor() { }

  updateBooks(books: any[]): void {
    this.booksSource.next(books);
  }
}
