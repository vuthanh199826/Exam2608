import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../service/book.service';
import {Book} from '../../model/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
book: FormGroup = new FormGroup({
  title: new FormControl(),
  author: new FormControl(),
  description: new FormControl()
});
id: number;
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
  update() {
    const newBook = this.book.value;
    this.bookService.updateById(this.id, newBook).subscribe(data => {
      alert('success');
      this.route.navigate(['/book/list']);
    });
  }

}
