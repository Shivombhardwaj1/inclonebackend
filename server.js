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
if (process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"));
    
}


const PORT=process.env.PORT || 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const URL = process.env.MONGODB_URI || `mongodb://${username}:${password}@ac-tctgi5e-shard-00-00.fdujv2k.mongodb.net:27017,ac-tctgi5e-shard-00-01.fdujv2k.mongodb.net:27017,ac-tctgi5e-shard-00-02.fdujv2k.mongodb.net:27017/?ssl=true&replicaSet=atlas-d7hzic-shard-0&authSource=admin&retryWrites=true&w=majority`

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
Connection(URL);


DefaultData();