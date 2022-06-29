import { Category } from '../../common/category.enum';
import { IBook } from './book.interface';
export class Book implements IBook {
  // title: string;
  // image: string;
  // category: Category;
  // quantity: number;
  // price: number;
  // description: string;

  constructor(
    public title: string,
    public image: string,
    public category: Category,
    public quantity: number,
    public price: number,
    public description: string,
    public _id?: string,
  ) {}
}
