import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ChatService } from './chat.service';




const generateChatCompletion = catchAsync(async (req: Request, res: Response) => {
  const { message } = req.body;
  const user = req.user;
  const result = await ChatService.generateChatCompletionInDB(message, user);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Chat generated successfully',
    data: result,
  });
});

export const ChatController = {
  generateChatCompletion,
};