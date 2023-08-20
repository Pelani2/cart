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
                {currentStep === 1 && <ShippingForm onNext={handleNext} />}
                {currentStep === 2 && <Billing onBack={handlePrevious} onNext={handleNext} />}
                {currentStep === 3 && <Payment onBack={handlePrevious} onNext={handleNext} />}
                {currentStep === 4 && <Confirmation onBack={handlePrevious} />}
            </div>
        </div>
    );
};

export default Checkout;