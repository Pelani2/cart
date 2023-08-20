import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"; 
import * as yup from "yup";
import "./shipping-styles.scss";

const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    address: yup.string().required("Address is required"),
    city: yup.string().required("City is required"),
    postalCode: yup.string().required("Postal code is required"),
    country: yup.string().required("Country is required"),
});

const ShippingForm = ({ onNext }) => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        onNext();
    };

    return (
        <div className="shipping-form">
            <h2>Shipping Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="firstName">First name:</label>
                    <Controller 
                        name="firstName"
                        control={control}
                        render={({ field }) => (
                            <input {...field} type="text" />
                        )}
                    />
                    <p className="error-message">
                        {errors.firstName?.message}
                    </p>
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">
                        Last name:
                    </label>
                    <Controller 
                        name="lastName"
                        control={control}
                        render={({ field }) => (
                            <input {...field} type="text"/>
                        )}
                    />
                    <p className="error-message">
                        {errors.lastName?.message}
                    </p>
                </div>
                <div className="form-group">
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

                <div className="form-group">
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
                <div className="form-group">
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
                <div className="form-group">
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
                <button type="submit">Next</button>
            </form>
        </div>
    );
};

export default ShippingForm;
