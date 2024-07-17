import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { VerificationSecurity } from 'src/core/security/verification.security';
import { WebEmail } from 'src/core/email/webEmail';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/entities/user.entity';

@Module({
  controllers: [AuthController],
  providers: [AuthService, VerificationSecurity, WebEmail],
  imports: [SequelizeModule.forFeature([User]), JwtModule],
  exports: [AuthService],
})
export class AuthModule {}
