import Notifications from "../../models/Notification";




export async function NotificationsList(uuid: string): Promise<Notifications[]> {
    try {
        const { count, rows: list } = await Notifications.findAndCountAll({where: {to: uuid}});


        return list;

    } catch (e) {
        console.log("Error while fetching Notifications: ", e);
        throw new Error("Error while fetching user");
    }
}