import { DELETE_PRODUCT, GET_PRODUCT, ADD_PRODUCT } from '../actions/types.js';

const initialState = {
    product: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                product: action.payload
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                product: state.product.filter(lead => product.id !== action.payload)
            };

        case ADD_PRODUCT:
            return {
                ...state,
                product: [...state.product, action.payload]
            };
        default:
            return state;
    }
}