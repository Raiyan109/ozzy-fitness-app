import express, { NextFunction, Request, Response } from 'express';

import { ChatController } from './chat.controller';


const router = express.Router();



router.post('/generate-chat-completion', ChatController.generateChatCompletion);

export const ChatRoutes = router;