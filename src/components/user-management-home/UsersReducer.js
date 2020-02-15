import types from "./types";

const initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
   /* let updatedCart;
    let updatedItemIndex;*/

    switch (action.type) {
        case types.USERS_GET_REQUEST:
            return {
                ...state,
                loading: true
            };
        case types.USERS_GET_RECEIVE:
            return {
                ...state,
                users: action.response,
                loading: false
            };
        case types.USERS_GET_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        /*case ADD_USER:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload.id
            );

            if (updatedItemIndex < 0) {
                updatedCart.push({ ...action.payload, quantity: 1 });
            } else {
                const updatedItem = {
                    ...updatedCart[updatedItemIndex]
                };
                updatedItem.quantity++;
                updatedCart[updatedItemIndex] = updatedItem;
            }
            return { ...state, cart: updatedCart };
        case REMOVE_PRODUCT_FROM_CART:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            const updatedItem = {
                ...updatedCart[updatedItemIndex]
            };
            updatedItem.quantity--;
            if (updatedItem.quantity <= 0) {
                updatedCart.splice(updatedItemIndex, 1);
            } else {
                updatedCart[updatedItemIndex] = updatedItem;
            }

            return { ...state, cart: updatedCart };*/
        default:
            return state;
    }
};

export default usersReducer;
