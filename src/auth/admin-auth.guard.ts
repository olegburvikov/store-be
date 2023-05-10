import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    try {
      const authHeader = req.headers.authorization;

      const [type, token] = authHeader.split(' ');

      if (type !== 'Bearer' || !token) {
        throw new UnauthorizedException({ message: 'User not authorized' });
      }

      const jwtInfo = this.jwtService.verify(token);

      if (!jwtInfo.isAdmin) {
        throw new UnauthorizedException({ message: 'Permissions denied' });
      }

      return true;
    } catch (e) {
      console.log(e);
      throw new UnauthorizedException({ message: 'User not authorized' });
    }
  }
}
