import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prismaService: PrismaService,
  ) {}

  async login(
    username: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const result = await this.prismaService.user.findUnique({
      where: { username, password },
    });

    if (result === null) {
      throw new UnauthorizedException();
    }

    const payload = { username, sub: result.id };

    const access_token = await this.jwtService.signAsync(payload);

    return { access_token };
  }
}
