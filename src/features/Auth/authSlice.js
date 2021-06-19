import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter
} from '@reduxjs/toolkit';
import baseURL from './../../api/apiAuth'
export const login=createAsyncThunk(
    'auth/login',
    async ({username,password}) => {
        const response = await baseURL.get('/users');
        return response.data
    }
)

const initialState={
    isLoading:false,
    isAuth:false,
    error:'',
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        loginPending:(state,action)=>{
            state.isLoading=true
        },
        loginSuccess:(state,{payload})=>{
            state.isLoading=false
            state.isAuth=true
            state.error=''
        },
        loginFail:(state,{payload})=>{
            state.isLoading=false
            state.error=payload
        },
    },
    extraReducers:{
        [login.pending]: (state, action) => {
            state.status = 'loading'
        },
        [login.fulfilled]: (state, action) => {
            loginSuccess(state,action)
        },
        [login.rejected]: (state, action) => {
            state.status = 'failed'
        },
    }
})
export const { loginSuccess, loginPending, loginFail } = authSlice.actions
export default authSlice.reducer