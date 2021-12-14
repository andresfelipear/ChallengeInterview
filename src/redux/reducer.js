import { INCREMENT, DECREMENT } from "./actions";

const initState = {
    value: 0
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: action.payload + 1
            }
        case DECREMENT:
            return {
                ...state,
                value: action.payload - 1
            }



        default:
            return state
    }
}

export default reducer