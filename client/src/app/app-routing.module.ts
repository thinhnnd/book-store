import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // basic routes
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'contact-us', component: ContactUsComponent },
    ],
  },
  // login route
  { path: 'login', component: LoginComponent },
  // redirect to home
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
