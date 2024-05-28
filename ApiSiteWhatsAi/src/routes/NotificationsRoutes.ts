
import express from 'express';
import * as NotificationsController from '../controller/NotificationsController' 
import isAuthentication from '../middleware/isAuthentication';

const NotificationsRoutes = express.Router();

NotificationsRoutes.post('/notifications/event/send', isAuthentication, NotificationsController.createNotificationEvent)
NotificationsRoutes.put('/notifications/mark-as-viewed', isAuthentication, NotificationsController.MarkAsViewedNotification)
NotificationsRoutes.get('/notifications', isAuthentication, NotificationsController.listNotification)

export default NotificationsRoutes;