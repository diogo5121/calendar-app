import User from "../../models/Users";

export interface ResponseUser {
    name: string;
    email: string;
    status: string;
    uid: string;
}
export async function acceptFriend(uuid: string, friendUid: string): Promise<boolean | null> {
    try {
        const user = await User.findOne({ where: { uid: uuid } });
        if (!user) {
            throw new Error('User not found');
        }
        
        const userfriend = await User.findOne({ where: { uid: friendUid } });

        if (!userfriend) {
            throw new Error('Friend not found');
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
        friendsArray.map(friend => {
            if(friend.uid === userfriend.uid){
                friend.status = 'approved'
            }
        })
        user.friends = JSON.stringify(friendsArray);
        await user.save();


        let friendsArray2: ResponseUser[];
        if (userfriend.friends) {
            try {
                friendsArray2 = JSON.parse(userfriend.friends);
            } catch (error) {
                throw new Error('Error parsing friends JSON');
            }
        } else {
            friendsArray2 = [];
        }

        if (!Array.isArray(friendsArray2)) {
            friendsArray2 = [];
        }
        friendsArray2.map(friend => {
            if(friend.uid === user.uid){
                friend.status = 'approved'
            }
        })
        userfriend.friends = JSON.stringify(friendsArray2);

        await userfriend.save();

        return true;
    } catch (error: any) {
        console.error(`Error when fetching friends: ${error.message}`);
        throw new Error(`Error when fetching friends: ${error.message}`);
    }
}
