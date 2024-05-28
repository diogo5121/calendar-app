
import express from 'express';
import * as FriendsController from '../controller/FriendsController' 
import isAuthentication from '../middleware/isAuthentication';

const FriendsRoutes = express.Router();

FriendsRoutes.get('/friends/list', isAuthentication, FriendsController.show)
FriendsRoutes.get('/friends/events/:id', isAuthentication, FriendsController.ShowEventFriendsController)
FriendsRoutes.post('/friends/add', isAuthentication , FriendsController.addFriend)
FriendsRoutes.post('/friends/accept', isAuthentication , FriendsController.acceptFriendController)
FriendsRoutes.delete('/friends/remove/:id', isAuthentication , FriendsController.removeFriend)

export default FriendsRoutes;