import { controller, httpPost, requestBody } from 'inversify-express-utils';
import { Request, Response } from 'express';
import { Auth } from './models/auth.model';
import { inject } from 'inversify';
import { AuthService } from './auth.service';
import TYPES from '../common/type.const';
import { UserReg } from './models/user-reg.model';

@controller('/auth')
export class AuthController {
  constructor(@inject(TYPES.AuthService) private authService: AuthService) {}

  @httpPost('/login')
  async login(@requestBody() auth: Auth, res: Response) {
    return this.authService.login(auth);
  }

  @httpPost('/register')
  register(@requestBody() userReg: UserReg, res: Response) {
    return this.authService.register(userReg);
  }
}
