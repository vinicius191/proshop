import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()
const PORT = process.env.PORT || 5000
const MODE = process.env.NODE_ENV

connectDB()

const app = express()

app.get('/', (req, res) => {
	console.log('here'.cyan.inverse)
	res.send('API is running...')
})

app.use('/api/products', productRoutes)

app.listen(
	PORT,
	console.log(`Server running in ${MODE} mode on port ${PORT}`.yellow.bold)
)
