import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'SECRET',
    });
  }

  //decode ao token
  //TUDO O QUE FOR RETORNADO AQUI FICA DISPONIVEL EM REQUEST.USER
  async validate(payload: any) {
    //aqui poderiamos fazer as queries a bd para ir buscar mais dados do user. o token so tem o id e o nome
    return {
      id: payload.sub,
      name: payload.name,
    };
  }
}
