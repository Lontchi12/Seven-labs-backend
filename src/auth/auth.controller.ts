import { Controller,Body ,Get, Post , ValidationPipe, Request,
  UseGuards, } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

// register user
    @Post('/signup')
    async signUp(
      @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto
    ): Promise<void> {
      
    return await this.authService.signUp(authCredentialsDto);
     //return ({"message":"Lab Updated successfully!"})
      
    }

// user login
    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async signIn(@Request() req) {
      return this.authService.signIn(req.user);
    }


// verify is user is already login 
    @UseGuards(JwtAuthGuard)
    @Get('/me')
    getMe(@Request() req) {
      return req.user;
    }
}
