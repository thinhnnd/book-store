import { Category } from 'src/common/category.enum';

export interface IBook {
  _id: string;
  title: string;
  image: string;
  category: Category;
  quantity: number;
  price: number;
  description: string;
}
