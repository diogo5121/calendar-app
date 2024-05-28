import { Request, Response } from "express";
import listEventsService from "../services/EventsService/ListEvents";
import { Root } from "../models/GetEvents";
import { CreateEvent } from "../services/EventsService/CreateEvent";
import { ShowMyEventsCreated } from "../services/EventsService/ListInternalEvent";
import { ShowMyFriendsEventsCreated } from "../services/EventsService/ListInternalEventFriends";
import { DeleteEvent } from "../services/EventsService/DeleteEvent";
import listEventsSearch from "../services/EventsService/ListEventSearsh";


export const listEvents = async (req: Request, res: Response): Promise<Response> => {
    const {id} = req.params;
    try {
        const ListEvents: Root = await listEventsService(parseFloat(id));
        return res.status(200).json({ success: true, ListEvents });
    } catch (e) {
        return res.status(500).json({ success: false, error: "Failed to fetch events" });

    }
};

export const listEventsSearchController = async (req: Request, res: Response): Promise<Response> => {
    const {searchString} = req.body;
    const {id} = req.params;
    try {
        const ListEvents = await listEventsSearch(parseFloat(id), searchString);
        return res.status(200).json({ success: true, ListEvents });
    } catch (e) {
        return res.status(500).json({ success: false, error: "Failed to fetch events" });

    }
};

export const Create = async (req: Request, res: Response): Promise<Response> => {
    const {
        event_name,
        state_code,
        state_name,
        city_name,
        address,
        attraction,
        dateTime,
        uuid
    } = req.body;

    try {
        const ListEvents = await CreateEvent({
            event_name,
            state_code,
            state_name,
            city_name,
            address,
            attraction,
            dateTime,
            uuid,
        });
        return res.status(200).json({ success: true, ListEvents });
    } catch (e) {
        return res.status(500).json({ success: false, error: "Failed to Create events" });

    }
};

export const ShowMyEvents = async (req: Request, res: Response): Promise<Response> => {
    const {
        uuid
    } = req.body;

    try {
        const ListEvents = await ShowMyEventsCreated(
            uuid,
        );
        return res.status(200).json({ success: true, ListEvents });
    } catch (e) {
        return res.status(500).json({ success: false, error: "Failed to Create events" });

    }
};

export const ShowMyFriendsEvents = async (req: Request, res: Response): Promise<Response> => {
    const {
        uuid
    } = req.body;

    try {
        const ListEvents = await ShowMyFriendsEventsCreated(
            uuid,
        );
        return res.status(200).json({ success: true, ListEvents });
    } catch (e) {
        return res.status(500).json({ success: false, error: "Failed to Create events" });

    }
};

export const DeleteEvets = async (req: Request, res: Response): Promise<Response> => {
    const {
        id
    } = req.params;

    try {
        const ListEvents = await DeleteEvent(
            id,
        );
        return res.status(200).json({ success: true, ListEvents });
    } catch (e) {
        return res.status(500).json({ success: false, error: "Failed to Create events" });

    }
};
