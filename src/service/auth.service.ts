import {User} from "../models/user.model";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET as string;

const refreshTokens = new Set<string>();

const adminUser: User = {
    id:1,
    username:"admin",
    password:bcrypt.hashSync("1234",10),
    role:"admin"

}
const customerUser: User = {
    id:2,
    username:"customer",
    password:bcrypt.hashSync("1234",10),
    role:"customer"
}
export const authenticateUser = (username:string,password:string)=>{
   const existingUser = userList.find(user=>user.username===username)
    let isValidPassword = undefined != existingUser && bcrypt.compareSync(password,<string>existingUser?.password)
    if (!existingUser && !isValidPassword) return null;

    const accessToken = jwt.sign({
        id:existingUser?.id,
        username:existingUser?.username,
        role:existingUser?.role
    },JWT_SECRET,{expiresIn:"5m"})

   const refreshToken = jwt.sign({
        username:existingUser?.username,
},REFRESH_TOKEN_SECRET,{expiresIn:"7d"})

    refreshTokens.add(refreshToken)
    return {accessToken,refreshToken}
}

const userList: User[] = [adminUser,customerUser];