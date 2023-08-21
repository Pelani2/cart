import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
};

const billingSlice = createSlice({
    name: "billing",
    initialState,
    reducers: {
        saveBillingInfo: (state, action) => {
            return { ...state, ...action.payload };
        },
        clearBillingInfo: (state) => {
            return initialState;
        },
    },
});

export const { saveBillingInfo, clearBillingInfo } = billingSlice.actions;
export default billingSlice.reducer;