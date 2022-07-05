import { Document, Model, model, Schema } from 'mongoose';

/**
 * Interface to model the User Schema for TypeScript.
 * @param email:string
 * @param password:string
 * @param firstName:string
 * @param lastName:string
 * @param avatarUrl:string
 * @param createdAt:string
 * @param updatedAt:string
 * @param deletedAt:string
 */
export interface IUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  avatarUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

const userSchema: Schema<IUser> = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  avatarUrl: {
    type: String,
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

const User: Model<IUser> = model('User', userSchema);

export default User;
