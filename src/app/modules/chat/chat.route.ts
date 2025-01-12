import express, { NextFunction, Request, Response } from 'express';

import { ChatController } from './chat.controller';
import auth from '../../middlewares/auth';
import { USER_ROLES } from '../../../enums/user';


const router = express.Router();



router.post('/generate-chat-completion', auth(USER_ROLES.ADMIN, USER_ROLES.USER), ChatController.generateChatCompletion);

export const ChatRoutes = router;