import User from '../../models/Users';

interface ResponseUser {
    name: string;
    email: string;
    uid: string;
}
export default async function RemoveFriend(uidFriend: string, uuid: string): Promise<Boolean> {
    try {
        const user = await User.findOne({ where: { uid: uuid } });
        if (!user) {
            throw new Error('User not found');
        }
        
        let friendsArray: ResponseUser[];
        if (user.friends) {
            try {
                friendsArray = JSON.parse(user.friends);
            } catch (error) {
                throw new Error('Error parsing friends JSON');
            }
        } else {
            friendsArray = [];
        }
        if (!Array.isArray(friendsArray)) {
            friendsArray = [];
        }

        friendsArray = friendsArray.filter(event => event.uid != uidFriend);

        user.friends = JSON.stringify(friendsArray);
        await user.save();

        //FRIEND DETROY TO ADD FRIEND

        const userFriend = await User.findOne({ where: { uid: uidFriend } });
        if (!userFriend) {
            throw new Error('User not found');
        }
        
        let friendsArray2: ResponseUser[];
        if (userFriend.friends) {
            try {
                friendsArray2 = JSON.parse(userFriend.friends);
            } catch (error) {
                throw new Error('Error parsing friends JSON');
            }
        } else {
            friendsArray2 = [];
        }
        if (!Array.isArray(friendsArray2)) {
            friendsArray2 = [];
        }

        friendsArray2 = friendsArray2.filter(event => event.uid != uuid);

        userFriend.friends = JSON.stringify(friendsArray2);
        await userFriend.save();
        
        return true;
    } catch (error: any) {
        console.error(`Error when fetching friends: ${error.message}`);
        throw new Error(`Error when fetching friends: ${error.message}`);
    }
}
