import { StatusCodes } from "http-status-codes";
import ApiError from "../../../errors/ApiError";
import { Plan } from "./plan.model";

const getAllPlansFromDB = async () => {
    const plans = await Plan.find({});

    if (!plans) {
        throw new ApiError(StatusCodes.BAD_REQUEST, 'Failed to get plans');
    }

    return plans;
};


export const PlanService = {
    getAllPlansFromDB,
};