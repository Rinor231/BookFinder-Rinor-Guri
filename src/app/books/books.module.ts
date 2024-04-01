import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialDisplayComponent } from './initial-display/initial-display.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InitialDisplayComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InitialDisplayComponent,
    SearchComponent
    ]
})
export class BooksModule { }
