import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  // verificar se o user existe
  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    //este user que é retornado vai ficar dentro do request. Isto ja é feito pelo passport
    return user;
  }
}
