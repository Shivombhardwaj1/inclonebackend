import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import DefaultData from './default.js'
import Route from './routes/route.js';
import dotenv from 'dotenv';
const app= express();
dotenv.config();
app.use(cors());
app.use('/', Route);

if(process.env.MODE_ENV === 'production')
{ app.use(express.static("client/build"));}

const PORT=process.env.PORT || 8000;
const username = process.env.DB_USERNAME;

const URL =  process.env.PROCESS_URI || `mongodb://${username}`


app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
Connection(URL);


DefaultData();