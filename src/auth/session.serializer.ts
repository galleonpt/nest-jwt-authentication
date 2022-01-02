import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

@Injectable()
export class SessionSerrializer extends PassportSerializer {
  serializeUser(user: any, done: (err: Error, user: any) => void): any {
    done(null, user); //segundo parametro é o que fica guardado dentro da session
  }

  deserializeUser(payload: any, done: (err: Error, user: any) => void): any {
    done(null, payload);
  }
}
