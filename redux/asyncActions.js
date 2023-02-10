const axios = require('axios')
const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const initialState = {

    loading: false,
    users: [],
    error: ''
}

const FETCH_SUERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_SUERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_SUERS_FAILED = 'FETCH_USERS_FAILED'

const fetchUserRequest = () => {
    return {
        type: FETCH_SUERS_REQUESTED
    }
}

const fetchUserSuccess = users => {
    return {
        type: FETCH_SUERS_SUCCEEDED,
        payload: users
    }
}

const fetchUserFail = error => {
    return {
        type: FETCH_SUERS_FAILED,
        payload: error
    }
}

const reducer =(state= initialState, action)=>{
 switch (action.type) {
    case FETCH_SUERS_REQUESTED:

        return {
            ...state,
            loading: true
        };
 
    case FETCH_SUERS_SUCCEEDED:
        return {
            loading: false,
            users: action.payload,
            error: ''
        };
    case FETCH_SUERS_FAILED:
        return {
            loading: false,
            users: [],
            error: action.payload
        }
 }
}
const fetchUsers = ()=>{
    return async function(dispatch){
        const url = 'https://jsonplaceholder.typicode.com/users'
        try {
            dispatch(fetchUserRequest())
            const {data} = await axios.get(url);
            const users = data.map(user=> user.id)
            dispatch(fetchUserSuccess(users))
        } catch (error) {
            dispatch(fetchUserFail(error.message))
        }
    }
   
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

const unsubscribe = store.subscribe(()=> console.log(store.getState()))

store.dispatch(fetchUsers())