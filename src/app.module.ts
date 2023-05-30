import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import SnakeNamingStrategy from 'typeorm-naming-strategy';

import { DataSource } from 'typeorm';
import { Carts, CartItems } from './db/types/types';
import * as process from 'process';

console.log({
  type: 'postgres',
  host: process.env.HOST,
  port: 5432,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
  entities: [Carts, CartItems],
  logging: true,
  namingStrategy: new SnakeNamingStrategy(),
  autoLoadEntities: true,
});

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: 5432,
      username: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DB_NAME,
      entities: [Carts, CartItems],
      logging: true,
      namingStrategy: new SnakeNamingStrategy(),
      autoLoadEntities: true,
    }),
    CartModule,
    OrderModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}