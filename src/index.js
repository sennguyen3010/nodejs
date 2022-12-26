import { engine } from 'express-handlebars';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

//body-parser (XMLhttpRequest, axios, fetch)
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/resources', '/views'));

console.log(path.join(__dirname));

app.get('/', (req, res) => {
  // res.send('Hello World!');
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.get('/query', (req, res) => {
  res.render('query');
});

app.post('/query', (req, res) => {
  console.log(req.body);
  res.send('');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
