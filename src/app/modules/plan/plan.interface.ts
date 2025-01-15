import { Types } from 'mongoose';

export type IPlan = {
  userId: Types.ObjectId;
  workout: string[];
  nutrition: string;
};