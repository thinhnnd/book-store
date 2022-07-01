import { inject } from 'inversify';
import {
  controller,
  httpPut,
  httpPost,
  requestBody,
  httpGet,
} from 'inversify-express-utils';
import { OrderItem } from './order-item.model';
import { OrdersService } from './orders.service';
import TYPES from '../common/type.const';

@controller('/orders')
export class OrdersController {
  constructor(
    @inject(TYPES.OrdersService) private orderService: OrdersService,
  ) {}

  @httpGet('/')
  getOrders() {
    return 'Orders';
  }

  @httpPost('/create')
  createOrder(@requestBody() orderItems: OrderItem[]) {
    return this.orderService.createOrder(orderItems);
  }
}
