import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IAuth } from '../login/models/auth.model';
import { Observable, of, Subject, throwError } from 'rxjs';
import {
  catchError,
  debounceTime,
  delay,
  switchMap,
  tap,
  map,
} from 'rxjs/operators';
import { JWTTokenService } from './jwt-token.service';
import { Router } from '@angular/router';
import { UserReg } from '../auth/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrls = environment.apiUrl + '/auth';
  private path = '/auth';
  public token: string | null = null;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  constructor(
    private http: HttpClient,
    private jwtService: JWTTokenService,
    public router: Router
  ) {}

  login(auth: IAuth) {
    return this.http
      .post<any>(`${this.authUrls}/login`, auth)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.accessToken);
        this.jwtService.setToken(res.accessToken);
        this.jwtService.decodeToken();
        this.currentUser = this.jwtService.decodeToken;
      });
  }

  signUp(user: UserReg): Observable<any> {
    let api = `${this.authUrls}/register`;
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(msg));
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
}
