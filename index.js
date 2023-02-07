const redux = require('redux')
const createStore = redux.createStore
const bindActionCreator = redux.bindActionCreators;
const combinedReducers = redux.combineReducers

const ORDER_CREATED ='ORDER_CREATED'
const RESTOCK_CAKE = 'RESTOCK_CAKE'
const RESTOCK_ICECREAM = 'RESTOCK_ICECREAM'
const ORDER_ICECREAM = 'ORDER_ICECREAM'

function orderCreated() {
    return {

        type: ORDER_CREATED,
        payload: 1
    }
}

function restockCake(qty=1) {
    return {

        type: RESTOCK_CAKE,
        payload: qty
    }
}
function orderIceCream(qty = 1) {
    return {

        type: ORDER_ICECREAM,
        payload: qty
    }
}
function restockIceCream(qty) {
    return {

        type: RESTOCK_ICECREAM,
        payload: qty
    }
}
const initialCakeState = {
    numberOfCake: 10,
    anotherProperty: 0
}
const initialIceCreamState = {
    numberOfIceCream: 10,
    anotherProperty: 0
}

const cakeReducer = (state= initialCakeState, action) =>{
    switch(action.type){
        case ORDER_CREATED:
            return {
                ...state,
                numberOfCake: state.numberOfCake - 1,
            }
        case RESTOCK_CAKE:
            return {
                ...state,
                numberOfCake: state.numberOfCake + action.payload,
            }
        default: 
            return state
        
    }

}

const iceCreamReducer = (state= initialIceCreamState, action) =>{
    switch(action.type){
        case ORDER_ICECREAM:
            return {
                ...state,
                numberOfIceCream: state.numberOfIceCream - 1,
            }
        case RESTOCK_ICECREAM:
            return {
                ...state,
                numberOfIceCream: state.numberOfIceCream + action.payload,
            }
        default: 
            return state
        
    }

}
const rootReducer = combinedReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
})
const store = createStore(rootReducer)
console.log('Initial State',store.getState());

const unsubscribe = store.subscribe(()=> console.log('Updated state', store.getState()))
const action = bindActionCreator({orderCreated, restockCake, orderIceCream, restockIceCream}, store.dispatch)
// store.dispatch(orderCreated())
// store.dispatch(orderCreated())
// store.dispatch(orderCreated())
// store.dispatch(restockCake(4))

action.orderCreated()
action.orderCreated()
action.orderCreated()
action.restockCake(4)
action.orderIceCream()
action.orderIceCream()
action.orderIceCream()
action.restockIceCream(4)
unsubscribe()