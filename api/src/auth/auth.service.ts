import { inject, injectable } from 'inversify';
import { Auth } from './models/auth.model';
import { User } from '../users/models/users.model';
import { JwtService } from './jwt.service';
import TYPES from '../common/type.const';
import { MongoDBClient } from '../utils/mongodb/client';
import { AuthResponse } from './models/auth-response.model';
import { UserReg } from './models/user-reg.model';
import { UserService } from '../users/models/user.service';

@injectable()
export class AuthService {
  constructor(
    @inject(TYPES.MongoDBClient) private mongoClient: MongoDBClient,
    @inject(TYPES.JwtService) private jwtService: JwtService,
    @inject(TYPES.UserService) private userService: UserService,
  ) {}

  // accessmodifier, return type
  checkCredential(auth: Auth) {
    const { email, password } = auth;
    return new Promise<User>((resolve, rejects) => {
      this.mongoClient.find(
        'users',
        { email, password },
        null,
        null,
        (error, data: User[]) => {
          // bổ sung errror handling
          if (error) rejects(error);
          if (data.length > 0) resolve(data[0]);
          resolve(null);
        },
      );
    });
  }

  // return type
  public async login(auth: Auth) {
    const res = await this.checkCredential(auth);
    if (!res) throw new Error('Invalid username or password');
    let authResponse = new AuthResponse(res);
    return {
      accessToken: this.jwtService.signToken(authResponse),
      _id: res._id,
    };
  }

  // every functions should have comment and desciption for its params and return type
  public async register(userReg: UserReg) {
    var user: User = new User();
    // factory pattern: apply initialize
    // every class should define its interface
    // ** when use create class, create constructor
    const { email, password, role, firstName, lastName } = userReg;
    user.email = userReg.email;
    user.password = userReg.password;
    user.role = 'normal';
    user.firstName = userReg.firstName;
    user.lastName = userReg.lastName;
    return this.userService.createUser(userReg);
  }
}
