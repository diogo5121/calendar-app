import { PlansResponse } from "../../Interfaces/PlansResponse";
import User from "../../models/Users";

interface ResponseUser {
    name: string;
    email: string;
    uid: string;
}
export async function FriendShow(uuid: string): Promise<ResponseUser | null> {
    try {
        const user = await User.findOne({ where: { uid: uuid } });

        if (!user) {
            return null;
        }

        return JSON.parse(user.friends);
    } catch (error) {
        console.log("Error while fetching friends: ", error);
        throw new Error("Error while fetching friends");
    }
}
