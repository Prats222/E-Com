import express from "express";
import colors from "colors";
import dotenv from 'dotenv'
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cors from 'cors';
//configure env
dotenv.config();

//db config
connectDB();

//rest object
const app=express()

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//all routes
app.use('/api/v1/auth',authRoutes);
//category route
app.use('/api/v1/category',categoryRoutes);
//product route
app.use('/api/v1/product',productRoutes);

//rest api
app.get('/',(req,res)=>{
    res.send({
        message: "Welcome to my app"
    })
})
const PORT=process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`.bgCyan.white);
});