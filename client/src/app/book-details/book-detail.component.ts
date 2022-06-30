import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/common/category.enum';
import { IBook } from '../book-list/book.interface';
import { BookDetailService } from './book-detail.service';

@Component({
  template: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  _id: string | null;

  book: IBook;

  constructor(
    private route: ActivatedRoute,
    private bookDetailService: BookDetailService
  ) {
    this._id = '';
    this.book = {
      _id: '',
      title: '',
      category: Category.drama,
      price: 0,
      quantity: 0,
      image: '',
      description: ``,
    };
  }
  ngOnInit(): void {
    this._id = this.route.snapshot.paramMap.get('_id');
    // this.route.queryParams.subscribe((params) => {
    //   console.log(params); // { orderby: "price" }
    //   this.id = params.id;
    //   if
    // });

    if (this._id)
      this.bookDetailService
        .getABook(this._id)
        .subscribe((book) => (this.book = book));
  }
}
