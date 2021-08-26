import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Book} from '../../model/book';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {
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
  delete(id: number) {
    this.bookService.deleteById(this.id).subscribe(() => {
      alert('deleted');
      this.route.navigate(['book/list']);
    });
  }

}
