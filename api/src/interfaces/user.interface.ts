import { UserType } from '../common/user-type.enum';
export interface IUser {
  email: string;
  name: string;
  password: string;
  type: UserType;
}
