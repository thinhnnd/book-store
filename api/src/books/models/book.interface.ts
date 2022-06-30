import { Category } from 'common/category.enum';
import { WithId, Document } from 'mongodb';

export interface IBook extends WithId<Document> {
  title: string;
  image: string;
  category: Category;
  quantity: number;
  price: number;
  description: string;
}
