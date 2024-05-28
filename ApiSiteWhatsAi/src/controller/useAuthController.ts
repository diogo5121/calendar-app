import { Request, Response } from "express";
import loginWithEmailService from "../services/Auth/LoginWithEmail";
import { LoginResponse } from "../Interfaces/LoginResponse";
import singUpWithEmailandPasswordService from "../services/Auth/SingUp";
import dotenv from 'dotenv';
import { verify } from "jsonwebtoken";

dotenv.config();
const secretKey = process.env.SECRET_ACCESS_TOKEN || ''



export const loginWithEmail = async (req: Request, res: Response): Promise<Response> => {
    const {email, password} = req.body
    const login: LoginResponse = await loginWithEmailService(email, password)
    if(login.success === true){
      return res.status(200).json(login);
    }else{
      return res.status(401).json(login);
    }
};

export const singUpWithEmailandPassword = async (req: Request, res: Response): Promise<Response> => {
  const {name, email, companyname, phone, password, planId} = req.body
  const singup: LoginResponse = await singUpWithEmailandPasswordService(name, email, companyname, phone, password, planId)
  if(singup.success === true){
    return res.status(200).json(singup);
  }else{
    return res.status(500).json(singup);
  }

};
export const verifyToken = async (req: Request, res: Response): Promise<Response> => {
  const { token } = req.params
  console.log(token)
  try {
    const decoded = verify(token, secretKey);
    console.log(decoded);
    return res.status(200).json({ message: "valid token"});
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};