import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: '8940E1F6DD49DB987ED7447A63CEA7B9C60EA4F5AFE72F55D280364C6D7C02A7',
    });
  }

  async validate(payload: any) {
    return { _id: payload.sub, username: payload.username };
  }
}