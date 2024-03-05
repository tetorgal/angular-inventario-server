import express from 'express';
import morgan from 'morgan';
import homeRoute from './route/route.js';
import cookieParser from "cookie-parser";
import cors from 'cors';

const app=express();

app.use(cors({
    origin:"http://localhost:5173"
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api',homeRoute);

export default app;

