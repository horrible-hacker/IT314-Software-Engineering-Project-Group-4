import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import propertyRouter from './routes/property.route.js';
import transactionRouter from './routes/transaction.route.js';
import favouriteRouter from './routes/favourite.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB!');
    }).catch((err) => {
        console.log(err);
    });

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(cors({ origin: '*' }));

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
    }
);

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);
app.use('/api/property', propertyRouter);
app.use('/api/transaction', transactionRouter);
app.use('/api/favourite', favouriteRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});
