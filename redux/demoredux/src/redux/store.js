//Redux store
import {configureStore} from "@reduxjs/toolkit"

//reducer function
const reducer =(state = 0, action)=>{
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}
export const store = configureStore({
    reducer:reducer,
})