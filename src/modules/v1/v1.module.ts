import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, ProductModule, AuthModule],
  providers: [],
})
export class V1Module {}
