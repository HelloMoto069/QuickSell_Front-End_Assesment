import {
    handleInitialValue,
    handleMaxValue,
    handleSubmit,
    handleChange,
    handleIncrement,
    handleDecrement,
    handleSaving
} from "./constant";

const initialState = {
    initialValue: "",
    maxValue: "",
    isSubmited: false,
    value: "",
    isSaving: false
}


function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case handleInitialValue:
            return { ...state, initialValue: action.payload }
        case handleMaxValue:
            return { ...state, maxValue: action.payload }
        case handleSubmit:
            return {
                ...state, isSubmited: action.payload,
                maxValue: (!state.maxValue) ? 1000 : (state.maxValue < 1) ? 1 : state.maxValue
            }
        case handleIncrement:
            return { ...state, value: state.value + 1 };
        case handleDecrement:
            return { ...state, value: state.value - 1 };
        case handleChange:
            return { ...state, value: action.payload };
        case handleSaving:
            return { ...state, isSaving: action.payload };

        default: return state;
    }
}

export default reducer;