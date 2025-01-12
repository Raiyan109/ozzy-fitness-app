import Groq from "groq-sdk";
import { User } from "../user/user.model";
import { JwtPayload } from "jsonwebtoken";
import ApiError from "../../../errors/ApiError";
import { StatusCodes } from "http-status-codes";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });


const generateChatCompletionInDB = async (message: string, user: JwtPayload) => {

  const isExistUser = await User.findById(user.id)

  if (!isExistUser) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'User not found!');
  }




  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: message,
      },
    ],
    model: "llama-3.3-70b-versatile",
  });

};

export const ChatService = {
  generateChatCompletionInDB,
};