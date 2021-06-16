import { Schema, model } from 'mongoose';
import { UserDefenition } from './user.defenition';
import { IUserDocument, IUserModel } from './user.types';

const UsersSchema = new Schema<IUserDocument, IUserModel>(UserDefenition, { timestamps: true });

UsersSchema.statics.findByName = async function (name: string): Promise<IUserDocument | null> {
  return User.findOne({ userName: name }).exec();
};

UsersSchema.statics.findByTgId = async function (id: number): Promise<IUserDocument | null> {
  return User.findOne({ userId: id }).exec();
};

export const User = model<IUserDocument, IUserModel>('Users', UsersSchema);
