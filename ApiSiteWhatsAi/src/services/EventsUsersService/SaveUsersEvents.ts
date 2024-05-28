import User from '../../models/Users';
import { Root } from '../../models/GetEvents';

export default async function SaveEventsUserService(jsonEvent: string, uuid: string): Promise<Boolean> {
    try {
        const user = await User.findOne({ where: { uid: uuid } });
        if (!user) {
            throw new Error('User not found');
        }
        
        let eventsArray: any[];
        console.log(jsonEvent)
        console.log(user.eventsUser)
        if (user.eventsUser) {
            try {
                eventsArray = JSON.parse(user.eventsUser);
            } catch (error) {
                throw new Error('Error parsing eventsUser JSON');
            }
        } else {
            eventsArray = [];
        }

        if (!Array.isArray(eventsArray)) {
            eventsArray = [];
        }
        eventsArray.push(JSON.parse(jsonEvent));

        user.eventsUser = JSON.stringify(eventsArray);
        await user.save();
        
        return true;
    } catch (error: any) {
        console.error(`Error when fetching events: ${error.message}`);
        throw new Error(`Error when fetching events: ${error.message}`);
    }
}
