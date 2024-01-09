import { REMOVE_FROM_CARD } from "../actions/cardActions";
import { cardItems } from "../initialValues/cardItems";

const initialState = {
    cardItems: cardItems
}

export default function cardReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_CARD:
            let product = state.cardItems.find(c => c.product.id === payload.id)
            break;
        case REMOVE_FROM_CARD:

            break;

        default:
            break;
    }
}