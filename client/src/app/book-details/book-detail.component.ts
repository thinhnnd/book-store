import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  id: string | null;
  constructor(private route: ActivatedRoute) {
    this.id = '';
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
