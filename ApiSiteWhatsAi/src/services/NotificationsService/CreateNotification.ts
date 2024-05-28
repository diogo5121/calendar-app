import dayjs from "dayjs";
import { Notification } from "../../Interfaces/EventDataNotification";
import Notifications from "../../models/Notification";
import User from "../../models/Users";

export async function CreateNotification(data: Notification): Promise<Boolean> {
  try {
    const user = await User.findOne({ where: { uid: data.uuid } });
    if (!user) {
      throw new Error('User not found');
    }

    const notification = await Notifications.create({
      from: data.uuid, 
      to: data.friendId,
      title: 'Notification from ' + user.name,
      message: 'Event: ' + data.eventData.name + ' - ' + dayjs(data.eventData.datetime).format('YYYY-MM-DD')
    });

    console.log(notification);
    return true;
  } catch (e) {
    console.log("Error: ", e);
    return false;
  }
}
