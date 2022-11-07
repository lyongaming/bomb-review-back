import { Request, Response } from "express";
import { sequelize } from "../config/database";
import { handleError } from "../utils/errors.handle";

const registerCtrl = async(req: Request, res: Response) => {
    try {
        await sequelize.authenticate();
        console.log("siiiiiuuuuuuuu")
    } catch (error) {
        handleError(res, "ERROR_REGISTER");
    }
};

const loginCtrl = async(req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleError(res, "ERROR_LOGIN");
    }
};

export {
    registerCtrl,
    loginCtrl
}