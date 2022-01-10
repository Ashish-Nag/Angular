import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/book/models/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  books: BookModel[];

  // lifecycle hook, component is initialized, now we have to initialize our book array.
  ngOnInit(): void {
    this.books = [];
    let book = new BookModel();
    book.id = 1;
    book.name = "something";
    book.price = 300;
    book.author = "someone";
    book.imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2WtjQvKn8O48y_11pEnn8h58wjRHBx9L_EA&usqp=CAU";
    this.books.push(book);

    let book2 = new BookModel();
    book2.id = 2;
    book2.name = ".Net 2.0";
    book2.price = 200;
    book2.author = "Xyz Pub.";
    book2.imgSrc = "https://images-na.ssl-images-amazon.com/images/I/51JdckX4AdL.jpg";
    this.books.push(book2);
  }

}
