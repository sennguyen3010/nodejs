import express from 'express';
import CourseController from '../app/controllers/CourseController.js';
import { MyModel as CourseSchema } from '../app/models/Course.js';

const router = express.Router();

router.get('/create', CourseController.create);
router.post('/store', CourseController.store);
router.get('/:slug', CourseController.show);
router.get('/:id/edit', CourseController.edit);
router.put('/:id', CourseController.update);

export { router };
