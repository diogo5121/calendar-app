import User from "../../models/Users";

export async function AddFriend(uuid: string, friendUid: string): Promise<boolean | null> {
    try {
        const user = await User.findOne({ where: { uid: uuid } });
        if (!user) {
            throw new Error('User not found');
        }
        
        const userfriend = await User.findOne({ where: { uid: friendUid } });
        if (!userfriend) {
            throw new Error('Friend not found');
        }

        let friendsArray: any[];
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

        const friend = {
            uid: friendUid,
            name: userfriend.name,
            status: 'request',
            email: userfriend.email
        };
        
        friendsArray.push(friend);
        user.friends = JSON.stringify(friendsArray);
        await user.save();

        let userfriendFriendsArray: any[];
        if (userfriend.friends) {
            try {
                userfriendFriendsArray = JSON.parse(userfriend.friends);
            } catch (error) {
                throw new Error('Error parsing user friend\'s friends JSON');
            }
        } else {
            userfriendFriendsArray = [];
        }

        if (!Array.isArray(userfriendFriendsArray)) {
            userfriendFriendsArray = [];
        }

        const friendData = {
            uid: uuid,
            name: user.name,
            status: 'pending',
            email: user.email
        };

        userfriendFriendsArray.push(friendData);
        userfriend.friends = JSON.stringify(userfriendFriendsArray);
        await userfriend.save();

        return true;
    } catch (error: any) {
        console.error(`Error when fetching friends: ${error.message}`);
        throw new Error(`Error when fetching friends: ${error.message}`);
    }
}
