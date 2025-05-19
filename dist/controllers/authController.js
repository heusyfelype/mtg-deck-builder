import { createUser } from "../services/authUSerService.js";
export async function registerUserController(req, res) {
    console.log("register user is calling succesfully");
    createUser(req.body);
    res.sendStatus(201);
}
