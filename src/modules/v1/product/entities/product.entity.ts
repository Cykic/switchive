
import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Product extends Model<Product> {
  @Column({
    allowNull: false,
  })
  name: string;

  @Column({
    allowNull: false,
  })
  price: number;

  @Column({
    allowNull: true,
  })
  description: string;

  @Column({
    allowNull: true,
  })
  imageUrl: string;
}
