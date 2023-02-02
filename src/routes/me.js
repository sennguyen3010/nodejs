import express from 'express';
import MeController from '../app/controllers/MeController.js';
import { MyModel as CourseSchema } from '../app/models/Course.js';

const router = express.Router();

router.get('/stored/courses', MeController.storedCourses);

export { router };
