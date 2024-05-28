import User from '../../models/Users';
import { Event } from '../../Interfaces/EventsSaved';

export default async function RemoveEventsHaveTickets(id: string, uuid: string): Promise<Boolean> {
    try {
        const user = await User.findOne({ where: { uid: uuid } });
        if (!user) {
            throw new Error('User not found');
        }
        
        let eventsArray: Event[];
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

        eventsArray = eventsArray.filter(event => event.id != id);

        user.ticketsUser = JSON.stringify(eventsArray);
        await user.save();
        
        return true;
    } catch (error: any) {
        console.error(`Error when fetching events: ${error.message}`);
        throw new Error(`Error when fetching events: ${error.message}`);
    }
}
