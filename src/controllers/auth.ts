import { Request, Response } from "express";
import { handleError } from "../utils/errors.handle";

const registerCtrl = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleError(res, "ERROR_REGISTER");
    }
};

const loginCtrl = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleError(res, "ERROR_LOGIN");
    }
};

export {
    registerCtrl,
    loginCtrl
}