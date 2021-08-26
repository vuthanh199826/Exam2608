import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  book: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  });

  constructor(private bookService: BookService,
              private route: Router) { }

  ngOnInit(): void {
  }
  create() {
    const newBook = this.book.value;
    this.bookService.create(newBook).subscribe(() => {
      alert('success');
      this.route.navigate(['/book/list']);
    });
  }

}
