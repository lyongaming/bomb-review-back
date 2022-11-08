import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth";
import { handleError } from "../utils/errors.handle";

const registerCtrl = async({ body }: Request, res: Response) => {
    try {
        const response = await registerNewUser(body);
    } catch (error) {
        handleError(res, "ERROR_REGISTER");
    }
};

const loginCtrl = async({ body }: Request, res: Response) => {
    try {
        const response = await loginUser();
    } catch (error) {
        handleError(res, "ERROR_LOGIN");
    }
};

export {
    registerCtrl,
    loginCtrl
}