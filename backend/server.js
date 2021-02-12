import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import { notFound, errorHandler} from './middleware/errorMiddleware.js'
import connectDB from  './config/db.js'
//import {connect } from 'mongoose'
//import products from './data/products.js'
//const products = require('./data/products')>>>>Normal JS syntex
import productRoutes from './routes/productRoutes.js'
const app =express()

dotenv.config()
connectDB ()


app.get('/', (req, res) => {
    res.send('API is running now...YES yes..')
})

app.use('/api/products', productRoutes)

// for 404 error which is not accual route 
app.use(notFound)
// FOR NOT in production MOOD
app.use(errorHandler)
const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running HERE in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
)