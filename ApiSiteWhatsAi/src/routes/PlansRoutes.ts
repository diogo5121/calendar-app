
import express from 'express';
import * as PlansController from '../controller/PlansController' 

const PlansRoutes = express.Router();

PlansRoutes.get('/plans/list', PlansController.list)

export default PlansRoutes;