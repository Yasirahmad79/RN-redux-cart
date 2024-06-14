import { Add_To_Cart, REMOVE_FROM_CART, USER_LIST } from "./constant";

export const addToCart = (item) => ({
    type: Add_To_Cart,
    payload: item
});
export const removeFromCart = (itemName) => ({
    type: REMOVE_FROM_CART,
    payload: itemName
});
export const getUserlist = () => ({
    type: USER_LIST
});
