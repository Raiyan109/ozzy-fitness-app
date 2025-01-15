import express, { NextFunction, Request, Response } from 'express';
import { SubscriptionControllers } from './subsription.controller';


const router = express.Router();

router.get('/customers/:customerId', SubscriptionControllers.getPortalSession);

router.post('/subscribe', SubscriptionControllers.createSubscription);
router.get('/subscribe', SubscriptionControllers.getSubscription);

export const SubscriptionRoutes = router;