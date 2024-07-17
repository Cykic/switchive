import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Product extends Model<Product> {
  @Column({
    allowNull: false,
  })
  name: string;

  @Column({
    allowNull: false,
    type: DataType.FLOAT,
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
