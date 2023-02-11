const configureStore = require('@reduxjs/toolkit').configureStore
const reduxLogger = require('redux-logger')
const cakeReducer = require('../features/cake/cakeSlice')
const iceCreamReducer= require('../features/icecream/icecreamSlice')
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: iceCreamReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLogger),
})

module.exports = store
