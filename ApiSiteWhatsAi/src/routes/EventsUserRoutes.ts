
import express from 'express';
import * as EventsUsersController from '../controller/EventsUsersController' 
import isAuthentication from '../middleware/isAuthentication';

const EventsUserRoutes = express.Router();

//EventsUserRoutes.get('/eventsUser/list', EventsUsersController.listEvents)
EventsUserRoutes.post('/eventsUser/save-consert', isAuthentication, EventsUsersController.save)
EventsUserRoutes.delete('/eventsUser/save-consert/:id', isAuthentication, EventsUsersController.remove)
EventsUserRoutes.post('/eventsUser/save-havetickets', isAuthentication, EventsUsersController.saveHaveTickets)
EventsUserRoutes.delete('/eventsUser/save-havetickets/:id', isAuthentication, EventsUsersController.removeHaveTickets)

export default EventsUserRoutes;