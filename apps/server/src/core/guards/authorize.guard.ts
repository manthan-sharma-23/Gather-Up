import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import * as jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config/env';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context).getContext();
    const authHeader = ctx.req.headers.authorization as string;
    if (authHeader) {
      try {
        const token = authHeader.startsWith('Bearer ')
          ? authHeader.split(' ')[1]
          : authHeader;
        const user = jwt.verify(token, SECRET_KEY);
        ctx.user = user;
        return true;
      } catch (err) {
        throw new HttpException(
          'Invalid token : ' + err.message,
          HttpStatus.UNAUTHORIZED,
        );
      }
    } else {
      return false;
    }
  }
}
