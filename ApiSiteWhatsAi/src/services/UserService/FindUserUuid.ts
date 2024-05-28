import { PlansResponse } from "../../Interfaces/PlansResponse";
import User from "../../models/Users";

export async function UserShowUuid(uuid: string): Promise<User | null> {
    try {
        const user = await User.findOne({ where: { uid: uuid } });

        if (!user) {
            return null;
        }

        return user;
    } catch (error) {
        console.log("Error while fetching user: ", error);
        throw new Error("Error while fetching user");
    }
}
