import mongoose from 'mongoose';
import { IChat } from './chat.interface';

const ChatSchema = new mongoose.Schema<IChat>(
  {
    id: {
      type: String,
    },
    role: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    content: {
      type: String,
      required: false,
    }
  },
  {
    timestamps: true,
  }
);

export const Chat = mongoose.model<IChat>('Chat', ChatSchema);