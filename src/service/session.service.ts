import SessionModel from "../models/session.model";
import { UserDocument } from "../models/user.model";

export async function  createSession(userId: string, userAgent: string) {
    const session = await SessionModel.create({user: userId, userAgent})

    return session.toJSON()
}








