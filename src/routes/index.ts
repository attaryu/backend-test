import { Router } from 'express';

import lectureRoutes from './lecture.route.js';
import classRoutes from './class.route.js';

const routes = Router();

routes.use(lectureRoutes);
routes.use(classRoutes);

export default routes;
