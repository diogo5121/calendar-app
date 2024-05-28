import { Request, Response } from "express";
import listEventsService from "../services/EventsService/ListEvents";
import { Root } from "../models/GetEvents";
import SaveEventsUserService from "../services/EventsUsersService/SaveUsersEvents";
import SaveEventsHaveTickets from "../services/EventsUsersService/SaveUsersHaveTickets";
import RemoveEventsUserService from "../services/EventsUsersService/RemoveUsersEvents";
import RemoveEventsHaveTickets from "../services/EventsUsersService/RemoveHaveTickets";



// export const listEvents = async (req: Request, res: Response): Promise<Response> => {
//     const {id} = req.params;
//     try {
//         const ListEvents: Root = await listEventsService(parseFloat(id));
//         return res.status(200).json({ success: true, ListEvents });
//     } catch (e) {
//         return res.status(500).json({ success: false, error: "Failed to fetch events" });

//     }
// };


export const save = async (req: Request, res: Response): Promise<Response> => {
    const {jsonEvent, uuid} = req.body;
    try {
        const ListEvents = await SaveEventsUserService(jsonEvent, uuid);
        return res.status(200).json({ success: true, ListEvents });
    } catch (e) {
        return res.status(500).json({ success: false, error: "Failed to fetch events" });

    }
};
export const remove = async (req: Request, res: Response): Promise<Response> => {
    const {uuid} = req.body;
    const {id} = req.params;
    try {
        const ListEvents = await RemoveEventsUserService(id, uuid);
        return res.status(200).json({ success: true, ListEvents });
    } catch (e) {
        return res.status(500).json({ success: false, error: "Failed to fetch events" });

    }
};

export const saveHaveTickets = async (req: Request, res: Response): Promise<Response> => {
    const {jsonEvent, uuid} = req.body;
    try {
        const ListEvents = await SaveEventsHaveTickets(jsonEvent, uuid);
        return res.status(200).json({ success: true, ListEvents });
    } catch (e) {
        return res.status(500).json({ success: false, error: "Failed to fetch events" });

    }
};

export const removeHaveTickets = async (req: Request, res: Response): Promise<Response> => {
    const {uuid} = req.body;
    const {id} = req.params;
    try {
        const ListEvents = await RemoveEventsHaveTickets(id, uuid);
        return res.status(200).json({ success: true, ListEvents });
    } catch (e) {
        return res.status(500).json({ success: false, error: "Failed to fetch events" });

    }
};