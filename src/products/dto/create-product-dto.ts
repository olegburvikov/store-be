import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'Beer', description: 'Product name' })
  readonly name: string;

  @ApiProperty({
    example: 'Some description',
    description: 'Product description',
  })
  readonly description: string;

  @ApiProperty({ example: '100', description: 'Product price' })
  readonly price: number;

  @ApiProperty({ example: '["img-url.png"]', description: 'images' })
  readonly images: string[];
}
