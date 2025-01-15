import catchAsync from "../../../shared/catchAsync";
import { Request, Response } from 'express';
import sendResponse from "../../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import { subscriptionService } from "./subsription.service";

const createSubscription = catchAsync(async (req: Request, res: Response) => {
  const { plan } = req.query;

  // Check if 'plan' is not undefined and is a string
  if (!plan || typeof plan !== 'string') {
    return res.status(400).send('Plan is required and must be a single string');
  }

  const result = await subscriptionService.createSubscriptionIntoDB(plan.toLowerCase())

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Subscription created successfully',
    data: result,
  });
});

const getSubscription = catchAsync(async (req: Request, res: Response) => {
  const { session_id } = req.query
  console.log(session_id, 'session id from getSubscription');
  if (!session_id) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      success: false,
      message: "Session ID is required.",
    });
  }

  const result = await subscriptionService.getSubscriptionFromDB(session_id as string)

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Subscription retrieved successfully',
    data: result,
  });
});

export const SubscriptionControllers = {
  createSubscription,
  getSubscription
}
