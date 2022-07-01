export class User {
  _id?: string;
  email: string = '';
  password: string = '';
  firstName?: string;
  lastName?: string;
  role?: string;
}

export class UserReg extends User {
  repeatPassword: string = '';
}
