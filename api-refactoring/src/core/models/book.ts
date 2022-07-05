import { Document, Model, model, Schema } from 'mongoose';

/**
 * Book interface
 * @param title:string
 * @param imageUrl:string[]
 * @param quantity:number
 * @param price:number
 * @param description:string
 * @param createdAt:string
 * @param updatedAt:string
 * @param deletedAt:string
 * @param category:string
 */
export interface IBook {
  title: string;
  imageUrl: string;
  quantity: number;
  price: number;
  description: string;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  category: string;
}

const bookSchema: Schema<IBook> = new Schema<IBook>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  imageUrl: {
    type: String,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
});

const Book: Model<IBook> = model('Book', bookSchema);

export default Book;
