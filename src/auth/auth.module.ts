import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';


import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserSchema } from './schemas/user.schema';
import { JwtStrategy } from './strategies/jwt-auth.strategy';
import { LocalStrategy } from './strategies/local.strategy';



@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  PassportModule,
  JwtModule.register({
    // secret: process.env.JWT_SECRET,
    secret:'8940E1F6DD49DB987ED7447A63CEA7B9C60EA4F5AFE72F55D280364C6D7C02A7',
    signOptions: { expiresIn: '15m' },
  }),
],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy, JwtStrategy]
})
export class AuthModule {}
