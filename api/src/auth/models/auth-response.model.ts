import { User } from '../../users/models/users.model';
export class AuthResponse {
  email: string;
  firstName: string;
  lastName: string;
  role: string;

  name: string;
  constructor(user: User) {
    this.email = user.email;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.role = user.role;
  }
}
