import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter
} from '@reduxjs/toolkit';
import baseURL from '../../api/jsonPlaceHolder'

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async () => {
        const response = await baseURL.get('/posts');
        return response.data
    }
)
export const getPost = createAsyncThunk(
    'posts/getPost',
    async (id) => {
        const response = await baseURL.get(`/posts/${id}`);
        return [response.data]
    }
)
const postsAdapter = createEntityAdapter({
    selectId: ({
        id
    }) => id,
})
const postsSlice = createSlice({
    name: 'posts',
    initialState: postsAdapter.getInitialState(
    ),
    reducers: {
        addPost: postsAdapter.addOne,
        setPosts: postsAdapter.setAll,
        addPosts: postsAdapter.addMany
    },
    extraReducers: {
        [getPosts.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getPosts.fulfilled]: (state, {
            payload
        }) => {
            postsAdapter.setAll(state,payload)
        },
        [getPosts.rejected]: (state, action) => {
            state.status = 'failed'
        },
        [getPost.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getPost.fulfilled]: (state, action) => {
            postsAdapter.setAll(state,action.payload)
        },
        [getPost.rejected]: (state, action) => {
            state.status = 'failed'
        },
    }
})
export const postsSelectors = postsAdapter.getSelectors(
    (state) => state.posts
)
export const {
    addPost,
    setPosts,
    addPosts,
} = postsSlice.actions
export default postsSlice.reducer;