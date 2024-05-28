
import express from 'express';
import * as UserController from '../controller/UserController' 
import isAuthentication from '../middleware/isAuthentication';

const UserRoutes = express.Router();

UserRoutes.get('/user/show', isAuthentication, UserController.show)
UserRoutes.get('/user/search-friends', isAuthentication, UserController.searchFriends)
UserRoutes.get('/user/search-user/:uuidParams', isAuthentication, UserController.UserShowUuidController)


export default UserRoutes;