import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productList, productDetails } from './reducers/product.js'

const reducer = combineReducers({
	productList: productList,
	productDetails: productDetails,
})

const initialState = {}

const middlewares = [thunk]

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middlewares))
)

export default store
