import express from 'express';
import SiteController from '../app/controllers/SiteController.js';

const router = express.Router();

router.get('/query', SiteController.search);
router.get('/', SiteController.index);

export { router };
