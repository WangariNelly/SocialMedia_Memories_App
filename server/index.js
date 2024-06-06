import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import postRoutes from './routes/posts.js';
import connectDB from './db/connect.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
const PORT = 5500;

const app = express();

//Middlewares
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//routes
app.use('/posts',postRoutes)
 

const connectToDatabase = async ()=> {
    try{
        await connectDB(process.env.MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true, 
            useFindAndModify: false, 
        });
        app.listen(PORT,console.log(`Server running on ${PORT}...`))
    } catch (err){
        console.log(err.message)
    }
};
connectToDatabase();


