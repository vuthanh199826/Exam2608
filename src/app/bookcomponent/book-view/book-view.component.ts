import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent implements OnInit {
  id: number;
  book: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  });

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute, private route: Router) {
    this.activatedRoute.paramMap.subscribe(data => {
      this.id = +data.get('id');
      this.getBook(this.id);
    });
  }

  ngOnInit(): void {
  }
  getBook(id: number) {
    this.bookService.getById(id).subscribe(data => {
      this.book = new FormGroup({
        title: new FormControl(data.title),
        author: new FormControl(data.author),
        description: new FormControl(data.description)
      });
    });
  }

}
