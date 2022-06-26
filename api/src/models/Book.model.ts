import { IBook } from '../interfaces/Book.interface';
export class Book implements IBook {
  title: string;
  image: string;
  category: string;
  quantity: number;
  price: number;
  description: string;
}
