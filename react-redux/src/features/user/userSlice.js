import { createSlice } from "@reduxjs/toolkit"
import { get } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const url = 'https://jsonplaceholder.typicode.com/users'

const initialState = {
    loading: false,
    users: [],
    error: ''
}
export const fetchUsers = createAsyncThunk('user/fetchUsers', ()=>{
    return get(url).then(response=> response.data.map(user=> user.id))
})
const userSlice = createSlice({
 name:'user',
 initialState,
 extraReducers: builder=> {
    builder.addCase(fetchUsers.pending, (state)=>{
        state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action)=>{
        state.loading = false;
        state.users = action.payload
        state.error = ''
    })
    builder.addCase(fetchUsers.rejected, (state, action)=>{
        state.loading = false
        state.users = []
        state.error = action.error.message
    })
 }
})

export default userSlice.reducer
