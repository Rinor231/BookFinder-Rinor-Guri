import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../books-model';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'app-initial-display',
  templateUrl: './initial-display.component.html',
  styleUrls: ['./initial-display.component.css']
})
export class InitialDisplayComponent implements OnInit {
  books: Book[] = [];
  selectedBook: Book | null = null;


  constructor(private bookService: BookService, private bookDataService:BookDataService) { }

    ngOnInit(): void {
    // Subscribe to changes in the books array using the BookDataService
    this.bookDataService.books$.subscribe(books => {
      // Check if there are search results available
      if (books.length === 0) {
        // If no search results available, fetch random books
        this.fetchRandomBooks();
      } else {
        // If search results available, use them
        this.books = books;
      }
    });
  }
  fetchRandomBooks(): void {
    // Generate a random query to fetch random books
    const randomQuery = this.generateRandomQuery();
    this.bookService.searchBooks(randomQuery).subscribe(data => {
      // Take only the first 12 items to display
      this.books = data.items.slice(0, 12);
    });
  }

  private generateRandomQuery(): string {
    const keywords = ['fantasy', 'science fiction', 'mystery', 'horror', 'romance', 'adventure'];
    const randomKeywordIndex = Math.floor(Math.random() * keywords.length);
    return keywords[randomKeywordIndex];
  }

  searchBooks(query: string): void {
    // Fetch new books based on the search query
    this.bookService.searchBooks(query).subscribe(data => {
      // Take only the first 12 items to display
      this.books = data.items.slice(0, 12);
    });
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
