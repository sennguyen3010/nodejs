import { router as newsRouter } from './news.js';
import { router as siteRouter } from './site.js';

export const route = (app) => {
  app.use('/news', newsRouter);
  app.use('/', siteRouter);

  // app.get('/', (req, res) => {
  //   res.render('home');
  // });

  // app.get('/news', (req, res) => {
  //   res.render('news');
  // });

  // app.get('/query', (req, res) => {
  //   res.render('query');
  // });

  // app.post('/query', (req, res) => {
  //   console.log(req.body);
  //   res.send('');
  // });
};

// module.exports = route;
