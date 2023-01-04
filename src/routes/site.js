import express from 'express';
import SiteController from '../app/controllers/SiteController.js';

const router = express.Router();

router.use('/query', SiteController.search);
router.get('/', SiteController.index);

export { router };
