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

                </form>
            </div>
        </div>
    );
};

export default Billing;