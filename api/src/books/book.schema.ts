import mongooseService from 'common/service/mongoose.service';

class BookDao {
  Schema = mongooseService.getMongoose().Schema;
}
