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



const PORT=8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
Connection(username,password);


DefaultData();