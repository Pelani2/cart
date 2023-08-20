import React from "react";
import { useForm, Controller } from "react-hook-form";
import { CardElement } from "@stripe/react-stripe-js";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./payment-styles.scss";

const schema = yup.object().shape({
    cardNumber: yup.string().required("Card number is required"),
    cardExpiry: yup.string().required("Card expiry date is required"),
    cardCvc: yup.string().required("Card CVC is required"),
});

const Payment = ({ onBack, onSubmit }) => {
    const {
        handleSubmit, 
        control, 
        formState: { errors }
    } = useForm({ resolver: yupResolver(schema), });

    const handlePaymentSubmit = (data) => {
        onSubmit();
    };

    return (
        <div className="payment__container">
            <div className="payment">
                <h2>
                    Payment information
                </h2>
                <form onSubmit={handleSubmit(handlePaymentSubmit)}>
                    <div className="payment-group">
                        <label htmlFor="cardNumber">
                            Card number:
                        </label>
                        <Controller 
                            name="cardNumber"
                            control={control}
                            render={({ field }) => (
                                <input {...field} type="text" />
                            )}
                        />
                        <p className="error-message">
                            {errors.cardNumber?.message}
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Payment;