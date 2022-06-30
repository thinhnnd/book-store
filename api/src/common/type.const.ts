const TYPES = {
  MongoDBClient: Symbol.for('MongoDBClient'),
  BookService: Symbol.for('BookService'),
  JwtService: Symbol.for('JwtService'),
  AuthService: Symbol.for('AuthService'),
  UserService: Symbol.for('UserService'),
};

export default TYPES;
