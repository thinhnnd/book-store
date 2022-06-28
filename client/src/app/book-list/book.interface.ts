import { Category } from 'src/common/category.enum';

export interface Country {
  id: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}

export interface IBook {
  id: number;
  title: string;
  image: string;
  category: Category;
  quantity: number;
  price: number;
  description: string;
}
