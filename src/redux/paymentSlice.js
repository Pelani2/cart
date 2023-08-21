import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
};

const paymentSlice = createSlice({
    name: "payment",
    initialState, 
    reducers: {
        savePaymentInfo: (state, action) => {
            return { ...state, ...action.payload };
        },
        clearPaymentInfo: (state) => {
            return initialState;
        },
    },
});

export const { savePaymentInfo, clearPaymentInfo } = paymentSlice.actions;
export default paymentSlice.reducer;