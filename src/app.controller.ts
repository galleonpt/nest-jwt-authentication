import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() request): any {
    return this.authService.login(request.user);
  }

  @UseGuards(JwtAuthGuard) //usar isto para ter as rotas protegidas com o login
  @Get('protected')
  getHello(@Request() request): string {
    return request.user;
  }
}
