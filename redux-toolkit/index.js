const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions
const fetchUsers = require('./features/user/userSlice').fetchUsers
console.log('InitialState', store.getState())
const unsubscribe = store.subscribe(()=>{
    console.log('Updated store', store.getState());
})

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(4))

// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.restocked(4))

store.dispatch(fetchUsers())