import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { IsUrl } from 'sequelize-typescript';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsOptional()
  imageUrl: string;
}
