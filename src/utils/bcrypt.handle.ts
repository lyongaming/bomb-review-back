import { hash, compare } from "bcryptjs";

const encrypt = async(pass: string) => {
    const passHash = await hash(pass, 8);
    return passHash;
};

const verified = () => {};

export { encrypt, verified };