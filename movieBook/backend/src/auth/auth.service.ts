import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(
    username: string,
    password: string,
  ): Promise<{ access_token: string }> {
    // @todo Replace this with a real user authentication.
    if (username !== 'admin' || password !== 'test') {
      throw new UnauthorizedException();
    }

    const payload = { username, sub: 42 };

    const access_token = await this.jwtService.signAsync(payload);

    return { access_token };
  }
}
