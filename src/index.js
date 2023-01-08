import { engine } from 'express-handlebars';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import { route } from './routes/index.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('connected to mongoDB');
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('mongoDB disconnected!');
});

mongoose.connection.on('connected', () => {
  console.log('mongoDB connected!');
});

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
app.set('views', path.join(__dirname, 'resources', 'views'));

// console.log(path.join(__dirname));

// Routes init
route(app);

app.listen(port, () => {
  connect();
  console.log(`Example app listening on port ${port}`);
});

//MVC: (M: model, V: view, C: controller (web server -> routes -> dispatcher))
//Local host --- Hosting

//Action ---> Dispatcher ---> Function handler
