import { Router } from 'express';

import lectureRoutes from './lecture.route.js';
import classRoutes from './class.route.js';
import studentRoutes from './student.route.js';
import lessonRoutes from './lesson.route.js';

const routes = Router();

routes.use(lectureRoutes);
routes.use(classRoutes);
routes.use(studentRoutes);
routes.use(lessonRoutes);

export default routes;
