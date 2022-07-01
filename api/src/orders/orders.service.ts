import { inject, injectable } from 'inversify';
import { MongoDBClient } from '../utils/mongodb/client';
import TYPES from '../common/type.const';
import { OrderItem } from './order-item.model';

@injectable()
export class OrdersService {
  constructor(
    @inject(TYPES.MongoDBClient) private mongoClient: MongoDBClient,
  ) {}

  createOrder(cartItems: OrderItem[]) {
    console.log('cartItems', cartItems);
    cartItems.forEach((item) => {
      this.mongoClient.updateWithOperators(
        'books',
        item.item._id,
        {
          $inc: { quantity: -item.quantity },
        },
        (error, data) => {
          if (error) throw error;
        },
      );
    });

    return { msg: 'Create order successfuly' };
  }
}
