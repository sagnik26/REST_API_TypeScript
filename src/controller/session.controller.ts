import { Request, Response } from "express";
import { createSession } from "../service/session.service";
import { validatePassword } from "../service/user.service";
import { UserDocument } from "../models/user.model";

export async function createUserSessionHandler(req: Request, res: Response)  {
    
    // validate user's password
    const user = await validatePassword(req.body)


    if(!user) {
        res.status(401).send("Invalid email or password")
    }


    // create a session
    const session = await createSession(user._id, req.get("user-agent") || "");

    // create an access token

    // create a refresh token

    // return access and refresh token


}

