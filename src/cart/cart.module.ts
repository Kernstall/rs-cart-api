import { Module } from '@nestjs/common';

import { OrderModule } from '../order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CartController } from './cart.controller';
import { CartService } from './services';
import { Carts, CartItems } from '../db/types/types';


@Module({
  imports: [ TypeOrmModule.forFeature([Carts, CartItems]) ],
  providers: [ CartService ],
  controllers: [ CartController ]
})
export class CartModule {}
