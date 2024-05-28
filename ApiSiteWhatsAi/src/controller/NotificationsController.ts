import { Request, Response } from "express";
import { Notification } from "../Interfaces/EventDataNotification";
import { CreateNotification } from "../services/NotificationsService/CreateNotification";
import { NotificationsList } from "../services/NotificationsService/ListNotifications";
import Notifications from "../models/Notification";
import { MarkAsViewed } from "../services/NotificationsService/MarkAsViewed";


export const createNotificationEvent = async (req: Request, res: Response): Promise<Response> => {
    const data: Notification = req.body
    try {
        const notification = await CreateNotification(data)
        return res.status(200).json({ success: true, notification });
    } catch (e) {
        return res.status(500).json({ success: false, error: "Failed to fetch events" });

    }
};


export const listNotification = async (req: Request, res: Response): Promise<Response> => {
    const {uuid} = req.body;
    try {
        const notifications: Notifications[] = await NotificationsList(uuid)
        return res.status(200).json({ success: true, notifications });
    } catch (e) {
        return res.status(500).json({ success: false, error: "Failed to fetch events" });

    }
};
export const MarkAsViewedNotification = async (req: Request, res: Response): Promise<Response> => {
    const {id, uuid} = req.body;
    try {
        const notifications = await MarkAsViewed(id)
        return res.status(200).json({ success: true, notifications });
    } catch (e) {
        return res.status(500).json({ success: false, error: "Failed to fetch events" });

    }
};