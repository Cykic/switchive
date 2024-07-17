import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Protected } from 'src/core/decorators/access.decorator';
import { APIRes } from 'src/core/common/api-response';
import { PaginateQuery } from 'src/core/constant/paginate-query.constants';

@Controller('v1/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @Protected()
  async create(@Body() createProductDto: CreateProductDto) {
    const product = await this.productService.createProduct(createProductDto);
    return APIRes(product, 'Product created');
  }

  @Get()
  @Protected()
  async findAll(@Query() query: PaginateQuery) {
    const product = await this.productService.findAllProduct(query);
    return APIRes(product, 'Product fetched');
  }

  @Get(':id')
  @Protected()
  async findOne(@Param('id') id: string) {
    const product = await this.productService.findOneProduct(id);
    return APIRes(product, 'Product fetched');
  }

  @Patch(':id')
  @Protected()
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    const product = await this.productService.updateProduct(
      id,
      updateProductDto,
    );
    return APIRes(product, 'Product updated');
  }

  @Delete(':id')
  @Protected()
  async remove(@Param('id') id: string) {
    await this.productService.deleteOneProduct(id);
    return APIRes(null, 'Product deleted');
  }
}
