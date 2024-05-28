import { Event } from "../../Interfaces/EventsSaved";
import { PlansResponse } from "../../Interfaces/PlansResponse";
import User from "../../models/Users";

interface ResponseUser {
    name: string;
    email: string;
    status: string;
    uid: string;
}

export async function ShowEventFriends(uuid: string, id: string): Promise<ResponseUser[] | null> {
    try {
        const user = await User.findOne({ where: { uid: uuid } });

        if (!user) {
            return null;
        }

        const Friends: ResponseUser[] = [];  
        const friends: ResponseUser[] = JSON.parse(user.friends);

        for (const friend of friends) {
            const userFriend = await User.findOne({ where: { uid: friend.uid } });
            if (!userFriend) {
                continue; 
            }

            const eventsFriend: Event[] = JSON.parse(userFriend.eventsUser);

            if (Array.isArray(eventsFriend) && typeof id !== 'undefined' && typeof friend === 'object' && friend !== null) {
                if (eventsFriend.some(event => event.id === id)) {
                    Friends.push({
                        name: friend.name || '',
                        email: friend.email || '',
                        status: friend.status || '',
                        uid: friend.uid || '',  
                    });
                }
            }
        }

        return Friends; 
    } catch (error) {
        console.log("Error while fetching friends: ", error);
        throw new Error("Error while fetching friends");
    }
}
