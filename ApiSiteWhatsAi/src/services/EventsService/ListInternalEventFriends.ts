import { PlansResponse } from "../../Interfaces/PlansResponse";
import Events from "../../models/InternalEvents";
import User from "../../models/Users";

interface ResponseUser {
    name: string;
    email: string;
    status: string;
    uid: string;
}
export async function ShowMyFriendsEventsCreated(uuid: string): Promise<Events[] | null> {
    try {
        const user = await User.findOne({ where: { uid: uuid } });
        let events: Events[] = []
        if (!user) {
            return null;
        }

        const friends: ResponseUser[] = JSON.parse(user.friends)
        for (const friend of friends) {
            if(friend.status === "approved"){
                const eventsCreated = await Events.findAll({ where: {uuid: friend.uid}})
                events.push(...eventsCreated)
            }
        }

        return events;
    } catch (error) {
        console.log("Error while fetching friends: ", error);
        throw new Error("Error while fetching friends");
    }
}
