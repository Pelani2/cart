import React, { useState } from "react";
import ShippingForm from "../Shipping";
import Billing from "../Billing";
import Payment from "../Payment";
import Confirmation from "../Confirmation";
import "./checkout-styles.scss";

const Checkout = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePrevious = () => {
        setCurrentStep(currentStep - 1);
    };

    return (
        <div className="checkout__container">
            <div className="checkout">
                 
            </div>
        </div>
    );
};

export default Checkout;