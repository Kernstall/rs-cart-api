import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, JoinTable  } from 'typeorm';

enum OrderStatuses {
  ORDERED = 'ORDERED',
  OPEN = 'OPEN'
}

@Entity()
export class CartItems {
  @OneToOne(() => Carts, { onDelete: "CASCADE" })
  @JoinColumn({ name: 'cart_id', referencedColumnName: 'id' })
  cart_id: string;

  @PrimaryColumn({type: 'uuid', nullable: false})
  product_id: string;

  @Column({ type: 'integer' })
  count: string;
}

@Entity()
export class Carts {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', nullable: false })
  user_id: string;

  @Column({ type: 'date', nullable: false })
  created_at: string;

  @Column({ type: 'date', nullable: false })
  updated_at: number;

  @Column({ type: 'enum', enum: OrderStatuses })
  status: OrderStatuses;

  @OneToOne(() => CartItems, (cartInfo) => cartInfo.cart_id, { onDelete: "CASCADE" })
  @JoinTable()
  cart_info: CartItems;
}
