import { Request, Response } from "express";
import { createUser } from "../services/authUSerService.ts";
import { TUserSignupRequest } from "../requests/TUserSignupRequest.ts";

export async function registerUserController(req: Request, res: Response) {

    console.log("register user is calling succesfully");
    createUser(req.body as TUserSignupRequest)
    res.sendStatus(201);
}