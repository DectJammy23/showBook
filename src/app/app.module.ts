// import { BookService } from './book.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';

// import { FormsModule }   from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import {BooksComponent} from './app.books/app.books.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    // AppComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // MatInputModule
    // FormsModule,
    // AppRoutingModule
  ],
   providers: [],
  bootstrap: [BooksComponent]
})
export class AppModule { }
enableProdMode();