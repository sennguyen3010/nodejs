import { router as newsRouter } from './news.js';
import { router as siteRouter } from './site.js';
import { router as courseRouter } from './courses.js';

export const route = (app) => {
  app.use('/news', newsRouter);
  app.use('/', siteRouter);
  app.use('/courses', courseRouter);
};

// module.exports = route;
