import { Request, Response } from "express";
import { PlansList } from "../services/PlansServices/PlansList";
import { PlansResponse } from "../Interfaces/PlansResponse";
import User from "../models/Users";
import { UserShow } from "../services/UserService/FindUser";
import { UserShowEmail } from "../services/UserService/FindUserEmail";
import { UserShowUuid } from "../services/UserService/FindUserUuid";



export const show = async (req: Request, res: Response): Promise<Response> => {
    const {uuid} = req.body;
    try{
        const user = await UserShow(uuid)
        return res.status(200).json(user);
    }catch(err){
        return res.status(500).json({ success: false, error: "Failed to fetch plans" });

    }
};

export const UserShowUuidController = async (req: Request, res: Response): Promise<Response> => {
    const {uuidParams} = req.params;
    const {uuid} = req.body;
    try{
        const user = await UserShowUuid(uuidParams)
        return res.status(200).json(user);
    }catch(err){
        return res.status(500).json({ success: false, error: "Failed to fetch plans" });

    }
};

export const searchFriends = async (req: Request, res: Response): Promise<Response> => {
    const email = req.query.email as string;
    const {uuid} = req.body;
    try{

        const user = await UserShowEmail(email)
        return res.status(200).json(user);

    }catch(err){
        return res.status(500).json({ success: false, error: "Failed to fetch plans" });

    }
};