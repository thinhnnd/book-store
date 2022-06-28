import { Category } from 'common/category.enum';

export interface IBook {
  title: string;
  image: string;
  category: Category;
  quantity: number;
  price: number;
  description: string;
}
