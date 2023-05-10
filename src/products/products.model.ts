import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { DataTypes } from 'sequelize';

interface ProductCreationAttr {
  name: string;
  description: string;
  price: number;
  images: string[];
}

@Table({ tableName: 'products' })
export class Product extends Model<Product, ProductCreationAttr> {
  @ApiProperty({ example: '1', description: 'Uniq id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Beer', description: 'Product name' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: 'Some description',
    description: 'Product description',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @ApiProperty({
    example: '100',
    description: 'Product price',
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;

  @ApiProperty({
    example: '["test.png", "test2.png"]',
    description: 'images',
  })
  @Column({
    type: DataTypes.ARRAY(DataType.STRING),
    allowNull: false,
  })
  images: string[];
}
