import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import { BookComponent } from './book/book.component';
import {BooksComponent} from './app.books/app.books.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    // AppComponent,
    BookComponent,
    BooksComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    //MatSliderModule
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule
    // AppRoutingModule
  ],
   providers: [],
  bootstrap: [BooksComponent]
})
export class AppModule { }
enableProdMode();