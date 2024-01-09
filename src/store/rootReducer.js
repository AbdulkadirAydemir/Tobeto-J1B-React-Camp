import {combineReducers} from "redux";
import cardReducer from "./reducers/cardReducer";

const rootReducer = combineReducers({
    card : cardReducer
})

export default rootReducer