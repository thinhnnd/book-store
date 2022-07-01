import { Request, Response, NextFunction } from 'express';
import { BaseMiddleware } from 'inversify-express-utils';

import * as jwt from 'jsonwebtoken';

import { inject, injectable } from 'inversify';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { CommonConst } from '../common/common.const';

@injectable()
export class JwtAuthMiddleware extends BaseMiddleware {
  public handler(req: Request, res: Response, next: NextFunction): void {
    const token = this.getTokenFromHeader(req);
    let jwtPayload;

    //Try to validate the token and get data
    try {
      jwtPayload = <any>jwt.verify(token, CommonConst.jwt.secret);
      res.locals.jwtPayload = jwtPayload;
    } catch (error) {
      //If token is not valid, respond with 401 (unauthorized)
      res.status(401).send();
      return;
    }

    //The token is valid for 1 hour
    //We want to send a new token on every request
    // const { email, firstName, lastName, role } = jwtPayload;
    // const newToken = jwt.sign(
    //   { email, firstName, lastName, role },
    //   CommonConst.jwt.secret,
    //   {
    //     expiresIn: CommonConst.jwt.expiredDate,
    //   },
    // );
    // res.setHeader('authorization', 'Bearer ' + newToken);

    //Call the next middleware or controller
    next();
  }

  private getTokenFromHeader(req: Request): string | null {
    if (req.headers.authorization) {
      const authHeader = req.headers.authorization.split(' ');
      if (authHeader[0].toLowerCase() === 'bearer')
        return req.headers.authorization.split(' ')[1];
      else if (req.query && req.query.token) return <string>req.query.token;
    }
    return '';
  }
}
