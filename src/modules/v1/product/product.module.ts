import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from '../auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './entities/product.entity';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [SequelizeModule.forFeature([Product]), JwtModule, AuthModule],
})
export class ProductModule {}
