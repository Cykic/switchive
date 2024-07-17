import { Exclude } from 'class-transformer';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  firstName: string;

  @Column({
    allowNull: true,
  })
  lastName: string;

  @Column({
    allowNull: true,
  })
  suspended: string;

  @Column({
    allowNull: true,
  })
  @Exclude()
  password: string;
}
