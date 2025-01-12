import { Model, Types } from 'mongoose';
import { USER_ROLES } from '../../../enums/user';

export type IUser = {
  role: USER_ROLES;
  name: string;
  email: string;
  address: string;
  password: string;
  age: number;
  country: string;
  height: number;
  weight: number;
  gender: string;
  fitnessLevel: string;
  status: 'active' | 'suspended' | 'deleted';
  verified: boolean;
  phone: string;
  image: string;
  workouts: [Types.ObjectId];
  nutritions: [Types.ObjectId];
  progress: [Types.ObjectId];
  goals: [Types.ObjectId];
  subscriptions: [Types.ObjectId];
  consultations: [Types.ObjectId];
  chats: [Types.ObjectId];

  appId?: string;
  fcmToken?: string;
  isSuspended: boolean;
  suspensionEndDate?: Date;
  authentication?: {
    isResetPassword: boolean;
    oneTimeCode: number;
    expireAt: Date;
  };
};

export type UserModal = {
  isExistUserById(id: string): any;
  isExistUserByEmail(email: string): any;
  isAccountCreated(id: string): any;
  isMatchPassword(password: string, hashPassword: string): boolean;
} & Model<IUser>;
