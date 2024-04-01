import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../books-model';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string = '';
  books: Book[] = [];
  selectedBook: Book | null = null;

  constructor(private bookService: BookService, private bookDataService: BookDataService) { }

  searchBooks(): void {
      if (this.query.trim() !== '') {
      this.bookService.searchBooks(this.query).subscribe(data => {
        this.bookDataService.updateBooks(data.items); // Update books array using shared service
      });
    }
  }

  showDetails(book: Book): void {
    this.bookService.getBookDetails(book.id).subscribe(
      (details: Book) => {
        this.selectedBook = details;
        console.log('Selected Book:', this.selectedBook); // Log the selected book details
        this.openModal();
      },
      error => {
        console.error('Error fetching book details:', error);
      }
    );
  }
  openModal(): void {
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeModal(): void {
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  getISBN(identifiers?: { type: string; identifier: string }[]): string {
    if (!identifiers) return '';
    const isbnIdentifier = identifiers.find(identifier => identifier.type === 'ISBN_13' || identifier.type === 'ISBN_10');
    return isbnIdentifier ? isbnIdentifier.identifier : '';
  }
}
