import { Router } from 'express';
import lectureRoutes from './lectures.route.js';

const routes = Router();

routes.use(lectureRoutes);

export default routes;
