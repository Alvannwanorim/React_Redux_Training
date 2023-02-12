const configureStore = require('@reduxjs/toolkit').configureStore
const reduxLogger = require('redux-logger')
const cakeReducer = require('../features/cake/cakeSlice')
const iceCreamReducer= require('../features/icecream/icecreamSlice')
const userReducer = require('../features/user/userSlice')
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: iceCreamReducer,
        user: userReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLogger),
})

module.exports = store
