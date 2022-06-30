import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from '../book-list/book.interface';
import { Category } from '../../../../api/src/common/category.enum';
import { AddEditBookService } from './add-edit-book.service';
import { BookDetailService } from '../book-details/book-detail.service';

@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.scss'],
})
export class AddEditBookComponent implements OnInit {
  isAddMode!: boolean;
  _id!: string;
  loading: boolean;
  form: FormGroup;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private addEditBookService: AddEditBookService,
    private bookDetailService: BookDetailService
  ) {
    this.loading = false;
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      quantity: new FormControl(0, [Validators.required]),
      price: new FormControl(0, [Validators.required]),
      description: new FormControl('', []),
    });
  }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['_id'];
    this.isAddMode = !this._id;

    if (!this.isAddMode) {
      this.bookDetailService
        .getABook(this._id)
        .subscribe((book) => this.form.patchValue(book));
    }
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log('Add');

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    console.log('this.form.invalid', this.form.invalid);

    var a = this.findInvalidControls();

    console.log('a', a);

    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    console.log('Addmode', this.isAddMode);

    if (this.isAddMode) {
      console.log('Add1');
      this.createBook();
    } else {
      this.updateBook();
    }
  }

  createBook() {
    let cate = this.form.controls['category'].value;
    let book: IBook = {
      title: this.form.controls['title'].value,
      image: this.form.controls['image'].value,
      category: cate as Category,
      quantity: this.form.controls['quantity'].value,
      price: this.form.controls['price'].value,
      description: this.form.controls['description'].value,
    };
    this.addEditBookService
      .create(book)
      .subscribe(() => {
        // this.alertService.success('User added', { keepAfterRouteChange: true });
        this.router.navigate(['../'], { relativeTo: this.route });
      })
      .add(() => (this.loading = false));
  }

  updateBook() {
    let cate = this.form.controls['category'].value;
    let book: IBook = {
      _id: this._id,
      title: this.form.controls['title'].value,
      image: this.form.controls['image'].value,
      category: cate as Category,
      quantity: this.form.controls['quantity'].value,
      price: this.form.controls['price'].value,
      description: this.form.controls['description'].value,
    };
    this.addEditBookService
      .update(this._id, book)
      .subscribe(() => {
        // this.alertService.success('User added', { keepAfterRouteChange: true });
        this.router.navigate(['../'], { relativeTo: this.route });
      })
      .add(() => (this.loading = false));
  }

  public findInvalidControls() {
    const invalid = [];
    const controls = this.form.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  }
}
