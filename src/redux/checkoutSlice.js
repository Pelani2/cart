import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    step: 1,
};

const checkoutSlice = createSlice({
    name: "checkout",
    initialState,
    reducers: {
        goToNextStep: (state) => {
            return { ...state, step: state.step + 1};
        },
        goToPreviousStep: (state) => {
            return { ...state, step: state.step - 1};
        },
        resetCheckout: () => initialState,
    },
});

export const { goToNextStep, goToPreviousStep, resetCheckout } = checkoutSlice.actions;
export const selectCurrentStep = (state) => state.checkout.step;
export default checkoutSlice.reducer;