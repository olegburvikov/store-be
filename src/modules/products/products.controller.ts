import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product-dto';
import { ProductsService } from './products.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from './products.model';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @ApiOperation({ summary: 'Create new product' })
  @ApiResponse({ status: 200, type: Product })
  @Post()
  create(@Body() productDto: CreateProductDto) {
    return this.productsService.createProduct(productDto);
  }

  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({ status: 200, type: [Product] })
  @Get()
  getAll() {
    return this.productsService.getAllProducts();
  }
}
