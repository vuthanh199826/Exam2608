import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {Book} from '../../model/book';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.bookService.getAll().subscribe(data => {
      this.books = data;
    });
  }

}
