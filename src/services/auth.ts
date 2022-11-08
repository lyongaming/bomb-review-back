import { User } from "../interfaces/User.interface";
import db from "../models";

const users = db.users;

const registerNewUser = ({ name, email, password }: User) => {
    
};

const loginUser = () => {};

export {
    registerNewUser,
    loginUser
}