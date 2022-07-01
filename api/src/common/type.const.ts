const TYPES = {
  MongoDBClient: Symbol.for('MongoDBClient'),
  BookService: Symbol.for('BookService'),
  JwtService: Symbol.for('JwtService'),
  AuthService: Symbol.for('AuthService'),
  UserService: Symbol.for('UserService'),
  JwtAuthMiddleware: Symbol.for('JwtAuthMiddleware'),
  OrdersService: Symbol('OrdersService'),
};

export default TYPES;
