import { IBook } from '../interfaces/book.interface';
import { Category } from '../common/category.enum';
export class Book implements IBook {
  id: string;
  title: string;
  image: string;
  category: Category;
  quantity: number;
  price: number;
  description: string;
}
