import { controller, httpPost } from 'inversify-express-utils';
import { Request, Response } from 'express';
import { Auth } from './models/auth.model';
import { inject } from 'inversify';
import { AuthService } from './auth.service';
import TYPES from '../common/type.const';

@controller('/auth')
export class AuthController {
  constructor(@inject(TYPES.AuthService) private authService: AuthService) {}

  @httpPost('/login')
  async login(req: Request, res: Response) {
    const authData: Auth = req.body;
    return this.authService.login(authData);
  }

  register() {}
}
