import { injectable } from 'inversify';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

const hourADay = 3600 * 24;
@injectable()
export class JwtService {
  expiredDate: number;
  secret: string;

  constructor() {
    this.expiredDate = +process.env.JWT_EXPIRED_DATE || 7;
    this.secret = process.env.JWT_SECRET;
  }

  public signToken(data: object) {
    return jwt.sign(
      {
        ...data,
      },
      this.secret,
      { expiresIn: hourADay * this.expiredDate },
    );
  }
}
