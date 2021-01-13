import { Component, OnInit,AfterViewInit, ComponentFactoryResolver, ViewChild, ViewContainerRef, ComponentFactory } from '@angular/core';
import { BookComponent } from '../book/book.component';
import * as Books from '../../assets/books.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.books.component.html',
  styleUrls: ['./app.books.component.css']
})
export class BooksComponent implements OnInit, AfterViewInit {
  result = [];
  search = '';
  
  @ViewChild('resultContainer', {read: ViewContainerRef}) container
  constructor(private resolver: ComponentFactoryResolver) {
   }

  ngOnInit(): void {
  }

  //after page loads, load all books to page
  ngAfterViewInit(){
    Books.books.forEach((book)=>{
      const bookFactory = this.resolver.resolveComponentFactory(BookComponent)
      const bookRef = this.container.createComponent(bookFactory)
      bookRef.instance.bookDetails = book
    })
  }

  //on search, filter books array for match
  onSubmit(){
    //clear the element before rendering search results
    this.container.clear();

    //filter search results
    this.result = Books.books.filter((e)=> e.title.toLowerCase().includes(this.search.toLowerCase()))
    
    //Render book component for each search result
    this.result.forEach((book)=>{
      const bookFactory = this.resolver.resolveComponentFactory(BookComponent)
      const bookRef = this.container.createComponent(bookFactory)
      bookRef.instance.bookDetails = book
    })
  }
}
