import Notifications from "../../models/Notification";




export async function MarkAsViewed(id: number): Promise<boolean> {
    try {
        Notifications.update({
            viewed: true
        }, {where: {id}})

        return true;

    } catch (e) {
        console.log("Error while fetching Notifications: ", e);
        throw new Error("Error while fetching user");
    }
}