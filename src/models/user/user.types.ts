import { Model, Document } from 'mongoose';

export interface IUser {
  userId: number;
  userName: string;
  balance?: number;
  trees?: number;
  friends?: number;
  referer?: string;
}

export interface IUserWithTimestamp extends IUser {
  createdAt: Date;
  updatedAt: Date;
}

export type IUserDocument = IUserWithTimestamp & Document;

export interface IUserModel extends Model<IUserDocument> {
  findByName(name: string): Promise<IUserDocument | null>;
  findByTgId(id: number): Promise<IUserDocument | null>;
}
