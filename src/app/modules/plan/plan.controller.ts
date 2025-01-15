import { StatusCodes } from "http-status-codes";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { PlanService } from "./plan.service";

const createPlan = catchAsync(async (req, res) => {
    const result = await PlanService.createPlanIntoDB(req.body);
    sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: 'Plan created successfully',
        data: result,
    });
});

const getAllPlan = catchAsync(async (req, res) => {
    const result = await PlanService.getAllPlansFromDB();
    sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: 'Plan retrived successfully',
        data: result,
    });
});

export const PlanController = {
    createPlan,
    getAllPlan,
};