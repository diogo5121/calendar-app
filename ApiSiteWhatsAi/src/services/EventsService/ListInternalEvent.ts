import { PlansResponse } from "../../Interfaces/PlansResponse";
import Events from "../../models/InternalEvents";
import User from "../../models/Users";


export async function ShowMyEventsCreated(uuid: string): Promise<Events[] | null> {
    try {
        const user = await Events.findAll({ where: { uuid } });

        return user;
    } catch (error) {
        console.log("Error while fetching friends: ", error);
        throw new Error("Error while fetching friends");
    }
}
