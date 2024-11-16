import { Body, Controller, Delete, Get, Inject, Param, Patch, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PRODUCT_SERVICE } from 'src/config';

@Controller('products')
export class ProductsController {
  
  constructor(
    @Inject(PRODUCT_SERVICE) private readonly productsClient: ClientProxy,
  ) {}

  @Post()
  createProduct() {
    return 'Crea un producto'
  }

  @Get()
  findAllProducts() {
    return this.productsClient.send(
      { cmd: 'find_all_products' },{}
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return 'Regresa el producto '+id;
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return 'elimina el producto '+id;
  }

  @Patch(':id')
  pathProduct(@Param('id') id: string, @Body() body: any) {
    return 'actualiza el producto '+id;
  }
}