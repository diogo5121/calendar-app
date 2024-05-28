export interface EventData {
    id: string;
    name: string;
    datetime: string;
    country: string;
    countryCode: string;
    city: string;
    address: string;
    latitude: string;
    longitude: string;
}

export interface Notification {
    friendId: string;
    eventData: EventData;
    uuid: string;
}