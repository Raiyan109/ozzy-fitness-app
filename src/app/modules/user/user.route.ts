import express from 'express';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';
import validateRequest from '../../middlewares/validateRequest';
import { USER_ROLES } from '../../../enums/user';
import auth from '../../middlewares/auth';
const router = express.Router();

router.post(
  '/create-user',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser
);
router.post(
  '/create-admin',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createAdmin
);

router.get(
  '/profile',
  auth(USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.DRIVER),
  UserController.getUserProfile
);

router.get(
  '/get-all-users/:id',
  auth(USER_ROLES.ADMIN),
  UserController.getSingleUser
);

export const UserRoutes = router;
