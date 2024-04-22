import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [],
      inject: [],
      useFactory() {
        return {
          global: true,
          secret: 'topSecret51',
          signOptions: { expiresIn: '30m' },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
})
export class AuthModule {}
