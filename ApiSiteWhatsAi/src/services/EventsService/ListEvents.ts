import axios, { AxiosResponse } from 'axios';
import { Root } from '../../models/GetEvents';
import dayjs from 'dayjs'
export default async function listEventsService(page: number): Promise<Root> {
    try {
        const response: AxiosResponse<Root> = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&page=${page}&size=20&apikey=4YaaDCC5ljnrIZGqBhtrAd2VpnN82Ges&sort=date,asc`);
        return response.data;
    } catch (error: any) {
        throw new Error(`Error when fetching events: ${error.message}`);
    }
};
