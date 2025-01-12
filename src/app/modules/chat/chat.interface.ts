import { Types } from 'mongoose';

export type IChat = {
  id: string;
  role: string;
  content: string;
};