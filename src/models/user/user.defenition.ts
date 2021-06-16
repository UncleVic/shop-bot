import { SchemaDefinition } from 'mongoose';
import { IUser } from './user.types';

export const UserDefenition: SchemaDefinition<IUser> = {
  userId: {
    type: Number,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  balance: Number,
  trees: Number,
  friends: Number,
  referer: String,
};
