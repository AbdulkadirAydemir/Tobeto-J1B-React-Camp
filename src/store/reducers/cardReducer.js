import { ADD_TO_CARD, REMOVE_FROM_CARD } from "../actions/cardActions";
import { cardItems } from "../initialValues/cardItems";

const initialState = {
    cardItems: cardItems
}

export default function cardReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_CARD:
            let product = state.cardItems.find(c => c.product.id === payload.id)
            if (product) {
                product.quantity++;
                return { ...state }
            } else {
                return { ...state, cardItems: [...state.cardItems, { quantity: 1, product: payload }] }
            }
        case REMOVE_FROM_CARD:
            return { ...state, cardItems: state.cardItems.filter(c => c.product.id !== payload.id) }      
        default:
            return state;
    }
}