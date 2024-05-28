import { Router } from "express";
import useAuthRoutes from "./useAuthRoutes";
import PlansRoutes from "./PlansRoutes";
import EventsRoutes from "./EventsRoutes";
import EventsUserRoutes from "./EventsUserRoutes";
import UserRoutes from "./UserRoute";
import FriendsRoutes from "./FriendsRoutrer";
import NotificationsRoutes from "./NotificationsRoutes";

const routes = Router();

routes.use(useAuthRoutes);
routes.use(PlansRoutes);
routes.use(EventsUserRoutes);
routes.use(EventsRoutes);
routes.use(FriendsRoutes);
routes.use(UserRoutes);
routes.use(NotificationsRoutes);

export default routes;
