import express from 'express';
import NewsController from '../app/controllers/NewsController.js';

const router = express.Router();

router.get('/:slug', NewsController.show);
router.get('/', NewsController.index);

export { router };
