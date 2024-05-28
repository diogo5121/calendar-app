
import express from 'express';
import * as useAuthController from '../controller/useAuthController' 

const useAuthRoutes = express.Router();

useAuthRoutes.post('/login', useAuthController.loginWithEmail)
useAuthRoutes.post('/auth/signup', useAuthController.singUpWithEmailandPassword)
useAuthRoutes.get('/verifytoken/:token', useAuthController.verifyToken)

export default useAuthRoutes;