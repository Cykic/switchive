import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Model, Op, WhereOptions } from 'sequelize';
import { PaginateQuery } from 'src/core/constant/paginate-query.constants';
import { User } from '../users/entities/user.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor() {}
  /**
   * Find all Products of a user
   * @param {UserDocument} user
   * @param {PaginateQuery} query
   * @returns
   */
  async findAllProduct(query: PaginateQuery): Promise<Array<Product>> {
    const filter: WhereOptions<Product> = {};

    if (query?.search) {
      filter[Op.or] = [
        { name: { [Op.iLike]: `%${query.search}%` } }, // Use Op.like for case-sensitive
        { description: { [Op.iLike]: `%${query.search}%` } },
      ];
    }

    const products = await Product.findAll({
      where: filter,
    });

    return products;
  }

  /**
   * Find a user's Product
   * @param user
   * @param id
   * @returns
   */
  async findOneProduct(id: string): Promise<Product> {
    const product = await Product.findByPk(id);
    if (!product) throw new NotFoundException('This product is not found');
    return product;
  }
  /**
   * Find one Product and update
   * @param user
   * @param id
   * @param updateProductDto
   * @returns
   */
  async updateProduct(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const product = await this.findOneProduct(id);
    await Product.update(updateProductDto, { where: { id } });
    return product.reload();
  }

  /**
   * Create a Product for user
   * @param user
   * @param createProductDto
   * @returns
   */
  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const product = await Product.create({
      ...createProductDto,
    });
    return product;
  }

  /**
   * Delete a user's Product
   * @param user
   * @param id
   * @returns
   */
  async deleteOneProduct(id: string) {
    await this.findOneProduct(id);
    await Product.destroy({
      where: {
        id,
      },
    });

    return null;
  }
}
