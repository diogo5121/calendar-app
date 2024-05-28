import { Request, Response } from "express";
import { PlansList } from "../services/PlansServices/PlansList";
import { PlansResponse } from "../Interfaces/PlansResponse";
import User from "../models/Users";
import { UserShow } from "../services/UserService/FindUser";
import { UserShowEmail } from "../services/UserService/FindUserEmail";
import { AddFriend } from "../services/FriendsService/FriendAdd";
import RemoveFriend from "../services/FriendsService/FriendRemove";
import { FriendShow } from "../services/FriendsService/FriendShow";
import { acceptFriend } from "../services/FriendsService/AcceptFriend";
import { ShowEventFriends } from "../services/FriendsService/ShowEventsFriend";


export const show = async (req: Request, res: Response): Promise<Response> => {
    const {uuid} = req.body;
    try{
        const user = await FriendShow(uuid)
        return res.status(200).json(user);
    }catch(err){
        return res.status(500).json({ success: false, error: "Failed to fetch plans" });

    }
};

export const addFriend = async (req: Request, res: Response): Promise<Response> => {
    const {uuid, uidfriend} = req.body;
    if(uuid === uidfriend){
        return res.status(500).json({ success: false, error: "Failed to request friends" });
    }
    try{
        const user = await AddFriend(uuid, uidfriend)
        return res.status(200).json(user);
    }catch(err){
        return res.status(500).json({ success: false, error: "Failed to request friends" });

    }
};

export const acceptFriendController = async (req: Request, res: Response): Promise<Response> => {
    const {uuid, uidfriend} = req.body;
    if(uuid === uidfriend){
        return res.status(500).json({ success: false, error: "Failed to request friends" });
    }
    try{
        const user = await acceptFriend(uuid, uidfriend)
        return res.status(200).json(user);
    }catch(err){
        return res.status(500).json({ success: false, error: "Failed to request friends" });

    }
};


export const ShowEventFriendsController = async (req: Request, res: Response): Promise<Response> => {
    const {uuid} = req.body;
    const {id} = req.params;

    try{
        const user = await ShowEventFriends(uuid, id)
        return res.status(200).json(user);
    }catch(err){
        return res.status(500).json({ success: false, error: "Failed to request friends" });

    }
};

export const removeFriend = async (req: Request, res: Response): Promise<Response> => {
    const{ id } = req.params
    const {uuid} = req.body;
    try{
        const user = await RemoveFriend(id, uuid)
        return res.status(200).json(user);
    }catch(err){
        return res.status(500).json({ success: false, error: "Failed to fetch plans" });

    }
};