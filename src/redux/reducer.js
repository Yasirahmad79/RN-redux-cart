import { Add_To_Cart, REMOVE_FROM_CART, SET_USER_DATA } from "./constant";

const initial_state = []

export const reducer =(state=initial_state, action)=>{
    switch (action.type) {
        case Add_To_Cart:
            return [
                ...state,
                action.payload
            ]
        case REMOVE_FROM_CART:
            let result = state.filter(item =>{
                return item.name != action.payload
            })
            return [...result]
        case SET_USER_DATA:
            return [
                ...state,
                action.data
            ]
        default:
            return state
    }
}