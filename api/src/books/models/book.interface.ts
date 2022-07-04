import { Category } from 'common/category.enum';
import { ObjectId } from 'mongodb';

export interface IBook {
  title: string;
  image: string;
  category: Category;
  quantity: number;
  price: number;
  description: string;
  _id?: ObjectId | string;
}
