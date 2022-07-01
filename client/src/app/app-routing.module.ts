import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SecondaryLayoutComponent } from './secondary-layout/seconday-layout.component';
import { RegisterComponent } from './register/register.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-details/book-detail.component';
import { AddEditBookComponent } from './add-book/add-edit-book.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './shared/auth.guard';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  // basic routes
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', component: BookListComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'books', component: BookListComponent },
      { path: 'books/add', component: AddEditBookComponent },
      { path: 'books/edit/:_id', component: AddEditBookComponent },
      { path: 'books/:_id', component: BookDetailComponent },
      {
        path: 'user-profile/:_id',
        component: UserProfileComponent,
        canActivate: [AuthGuard],
      },
      { path: 'cart', component: CartComponent },
    ],
  },
  // login route
  {
    path: '',
    component: SecondaryLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  // redirect to home
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
