import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./billing-styles.scss";

const schema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Email is required"),
    fullName: yup.string().required("Full name is required"),
    address: yup.string().required("Address is required"),
    city: yup.string().required("City is required"),
    postalCode: yup.string().required("Postal code is required"),
    country: yup.string().required("Country is required"),
});

const Billing = ({ onBack, onSubmit }) => {
    const {
        handleSubmit, 
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleBillingSubmit = (data) => {
        onSubmit();
    };

    return (
        <div className="billing__container">
            <div className="billing">
                <h2>
                    Billing information
                </h2>
                <form onSubmit={handleSubmit(handleBillingSubmit)}>
                    <div className="billing-group">
                        <label htmlFor="email">
                            Email:
                        </label>
                        <Controller 
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <input {...field} type="text" />
                            )}
                        />
                        <p className="error-message">
                            {errors.email?.message}
                        </p>
                    </div>

                    <div className="billing-group">
                        <label htmlFor="fullName">
                            Full name:
                        </label>
                        <Controller 
                            name="fullName"
                            control={control}
                            render={({ field }) => (
                                <input {...field} type="text" />
                            )}
                        />
                        <p className="error-message">
                            {errors.fullName?.message}
                        </p>
                    </div>

                    <div className="billing-group">
                        <label htmlFor="address">
                            Address:
                        </label>
                        <Controller 
                            name="address"
                            control={control}
                            render={({ field }) => (
                                <input {...field} type="text" />
                            )}
                        />
                        <p className="error-message">
                            {errors.address?.message}
                        </p>
                    </div>

                    <div className="billing-group">
                        <label htmlFor="city">
                            City:
                        </label>
                        <Controller 
                            name="city"
                            control={control}
                            render={({ field }) => (
                                <input {...field} type="text" />
                            )}
                        />
                        <p className="error-message">
                            {errors.city?.message}
                        </p>
                    </div>

                    <div className="billing-group">
                        <label htmlFor="postalCode">
                            Postal code:
                        </label>
                        <Controller 
                            name="postalCode"
                            control={control}
                            render={({ field }) => (
                                <input {...field} type="text" />
                            )}
                        />
                        <p className="error-message">
                            {errors.postalCode?.message}
                        </p>
                    </div>

                    <div className="billing-group">
                        <label htmlFor="country">
                            Country:
                        </label>
                        <Controller 
                            name="country"
                            control={control}
                            render={({ field }) => (
                                <input {...field} type="text" />
                            )}
                        />
                        <p className="error-message">
                            {errors.country?.message}
                        </p>
                    </div>

                    <div className="billing__buttons">
                        <button type="button" onClick={onBack}>
                            Back
                        </button>
                        <button type="submit">
                            Next
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Billing;