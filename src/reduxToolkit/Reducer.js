import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0
}

const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers:{
        increment : (state)=>{
            state.value += 1
        },
        decrement : (state)=>{
            state.value -= 1
        },
        restart : (state)=>{
            state.value = 0
        }
    }
})

export const {increment, decrement, restart} = counterSlice.actions;
export default counterSlice;