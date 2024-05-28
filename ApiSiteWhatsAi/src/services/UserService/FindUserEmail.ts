import { PlansResponse } from "../../Interfaces/PlansResponse";
import User from "../../models/Users";

export interface UsersFilter {
    uid: string;
    name: string;
    status: string;
    email: string;
}
export async function UserShowEmail(email: string): Promise<UsersFilter | null> {
    try {
        const user = await User.findOne({ where: { email: email } });

        if (!user) {
            return null;
        }

        const UserFilter = {
            name: user.name,
            email: user.email,
            status: 'request',
            uid: user.uid
        }

        return UserFilter;
    } catch (error) {
        console.log("Error while fetching user: ", error);
        throw new Error("Error while fetching user");
    }
}
