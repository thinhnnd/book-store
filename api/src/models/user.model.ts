import { UserType } from 'common/user-type.enum';

export class User {
  id: string;
  email: string;
  name: string;
  password: string;
  type: UserType;
}
