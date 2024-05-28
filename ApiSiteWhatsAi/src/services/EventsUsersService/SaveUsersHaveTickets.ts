import User from '../../models/Users';
import { Root } from '../../models/GetEvents';

export default async function SaveEventsHaveTickets(jsonEvent: string, uuid: string): Promise<Boolean> {
    try {
        const user = await User.findOne({ where: { uid: uuid } });
        if (!user) {
            throw new Error('User not found');
        }
        
        let eventsArray: any[];
        console.log(jsonEvent)
        console.log(user.ticketsUser)
        if (user.ticketsUser) {
            try {
                eventsArray = JSON.parse(user.ticketsUser);
            } catch (error) {
                throw new Error('Error parsing ticketsUser JSON');
            }
        } else {
            eventsArray = [];
        }

        if (!Array.isArray(eventsArray)) {
            eventsArray = [];
        }
        eventsArray.push(JSON.parse(jsonEvent));

        user.ticketsUser = JSON.stringify(eventsArray);
        await user.save();
        
        return true;
    } catch (error: any) {
        console.error(`Error when fetching events: ${error.message}`);
        throw new Error(`Error when fetching events: ${error.message}`);
    }
}
