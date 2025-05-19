import { TUserSignupRequest } from "../requests/TUserSignupRequest.ts";
import { create } from "../repositories/userRepository.ts"
import User from "../entities/User.ts";

export async function createUser(user: TUserSignupRequest) {
    await create({} as User)
}