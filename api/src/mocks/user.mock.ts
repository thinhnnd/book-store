import { UserType } from 'common/user-type.enum';
import { User } from 'models/User.model';

const users: User[] = [
  {
    id: '1',
    email: 'admin@bookstore.io',
    password: 'a123456@',
    name: 'Admin',
    type: UserType.admin,
  },
  {
    id: '2',
    email: 'guest01@bookstore.io',
    password: 'a123456@',
    name: 'Guest 01',
    type: UserType.normal,
  },
  {
    id: '3',
    email: 'guest02@bookstore.io',
    password: 'a123456@',
    name: 'Guest 02',
    type: UserType.normal,
  },
];

export { users };
