import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class JWTTokenService {
  jwtToken: string = '';
  decodedToken: { [key: string]: string } = {};

  constructor() {}

  setToken(token: string) {
    if (token) {
      this.jwtToken = token;
    }
  }

  decodeToken() {
    if (this.jwtToken) {
      this.decodedToken = jwt_decode(this.jwtToken);
    }
  }

  getDecodeToken() {
    return jwt_decode(this.jwtToken);
  }

  getName() {
    this.decodeToken();
    return this.decodedToken
      ? this.decodedToken['firstName'] + ' ' + this.decodedToken['lastName']
      : null;
  }

  getFistName() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken['firstName'] : null;
  }

  getLastName() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken['lasName'] : null;
  }

  getEmailId() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken['email'] : null;
  }

  getExpiryTime() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken['exp'] : '';
  }

  getTokenValue(key: string) {
    this.decodeToken();
    console.log('decodeToken', this.decodedToken);
    return this.decodedToken ? this.decodedToken[key] : '';
  }

  isTokenExpired(): boolean {
    const expiryTime: number = +this.getExpiryTime();
    if (expiryTime) {
      return 1000 * expiryTime - new Date().getTime() < 5000;
    } else {
      return false;
    }
  }
}
