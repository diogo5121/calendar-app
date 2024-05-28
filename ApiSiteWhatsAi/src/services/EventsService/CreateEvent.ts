import dayjs from "dayjs";
import { Notification } from "../../Interfaces/EventDataNotification";
import Notifications from "../../models/Notification";
import User from "../../models/Users";
import Events from "../../models/InternalEvents";

interface CreateEventsProps {
    event_name: string;
    state_code: string;
    state_name: string;
    city_name: string;
    address: string;
    attraction: string;
    dateTime: Date;
    uuid: string;
}
export async function CreateEvent({
    event_name,
    state_code,
    state_name,
    city_name,
    address,
    attraction,
    dateTime,
    uuid,
}:CreateEventsProps ): Promise<Boolean> {
  try {

    const notification = await Events.create({
        event_name,
        state_code,
        state_name,
        city_name,
        address,
        attraction,
        dateTime,
        uuid,
    });

    console.log(notification);
    return true;
  } catch (e) {
    console.log("Error: ", e);
    return false;
  }
}
