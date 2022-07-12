import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

const fakeActivatedRoute = {
  snapshot: { data: {} },
} as ActivatedRoute;

let authService: jasmine.SpyObj<AuthService>;

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        FormBuilder,
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        { provide: AuthService, useValue: authService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render h1 with content "Login"', () => {
    // get the name's input and display elements from the DOM
    const nativeElement: HTMLElement = fixture.nativeElement;

    expect(nativeElement.querySelector('.form-signin h1')?.textContent).toEqual(
      'Login'
    );
  });
});
