import { Router } from 'express';
import { userRoutes } from '../modules/user/user.route';
import { openRoutes } from '../modules/open/open.route';
import { lessonRoutes } from '../modules/lesson/lesson.route';
import { vocabularyRoutes } from '../modules/vocabulary/vocabulary.route';

const router = Router();

const moduleRoutes = [
 
  {
    path: '/',
    route: openRoutes,
  },
  {
    path: '/api',
    route: userRoutes,
  },
  {
    path: '/lesson',
    route: lessonRoutes,
  },
  {
    path: '/vocabulary',
    route: vocabularyRoutes,
  },
  
  
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
