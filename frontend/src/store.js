import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productList, productDetails } from './reducers/product.js'
import { cart } from './reducers/cart.js'

const reducer = combineReducers({
	productList: productList,
	productDetails: productDetails,
	cart: cart,
})

const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems'))
	: []

const initialState = {
	cart: { cartItems: cartItemsFromLocalStorage },
}

const middlewares = [thunk]

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middlewares))
)

export default store
