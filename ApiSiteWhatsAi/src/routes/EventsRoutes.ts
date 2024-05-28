
import express from 'express';
import * as EventsController from '../controller/EventsController' 
import isAuthentication from '../middleware/isAuthentication';

const EventsRoutes = express.Router();

EventsRoutes.get('/events/list/:id', EventsController.listEvents)
EventsRoutes.post('/events/list/:id', EventsController.listEventsSearchController)
EventsRoutes.post('/events/create', isAuthentication, EventsController.Create)
EventsRoutes.get('/events/showmyevents', isAuthentication, EventsController.ShowMyEvents)
EventsRoutes.get('/events/showmyfriendsevents', isAuthentication, EventsController.ShowMyFriendsEvents)
EventsRoutes.delete('/events/delete/:id', isAuthentication, EventsController.DeleteEvets)

export default EventsRoutes;