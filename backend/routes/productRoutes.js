import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/product.js'
import mongoose from 'mongoose'

// @description     Fetch all products
// @route           GET /api/products
// @access          Public
router.get(
	'/',
	asyncHandler(async (req, res) => {
		const products = await Product.find({})
		res.json(products)
	})
)

// @description     Fetch single products
// @route           GET /api/products/:id
// @access          Public
router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		if (!req.params.id || !mongoose.Types.ObjectId.isValid(req.params.id)) {
			res.status(404).json({
				message: 'Product ID not valid or not found',
			})
		}

		const product = await Product.findById(req.params.id)

		if (product) {
			res.json(product)
		} else {
			res.status(404)
			throw new Error('Product not found')
		}
	})
)

export default router
