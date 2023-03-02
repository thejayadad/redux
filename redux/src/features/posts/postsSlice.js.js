
import {createSlice} from "@reduxjs/toolkit"

const initialState= [
    {id: "1", title: "Sweet home Alabama", content: "yo yo yo"},
    {id: "2", title: "Running to the store", content: "hows life"}
]

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{
        postAdded(state, action){
            state.push(action.payload)
        }
    }
})

export const {postAdded} = postsSlice.actions


export default postsSlice.reducer
