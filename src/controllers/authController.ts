import { Request, Response } from "express";

export async function registerUserController(req: Request, res: Response) {

    console.log("register user is calling succesfully");
    res.sendStatus(201);
}