import React from "react";
import ShippingForm from "../Shipping";
import Billing from "../Billing";
import Payment from "../Payment";
import Confirmation from "../Confirmation";
import { useSelector, useDispatch } from "react-redux";
import { goToNextStep, goToPreviousStep, selectCurrentStep } from "../../../redux/checkoutSlice";
import "./checkout-styles.scss";

const Checkout = () => {
    const currentStep = useSelector(selectCurrentStep);
    const dispatch = useDispatch();
    
    const handleNext = () => {
        dispatch(goToNextStep());
    };

    const handleBack = () => {
        dispatch(goToPreviousStep());
    }

    return (
        <div className="checkout__container">
            <div className="checkout">
                {currentStep === 1 && <ShippingForm onNext={handleNext} />}
                {currentStep === 2 && <Billing onBack={handleBack} onNext={handleNext} />}
                {currentStep === 3 && <Payment onBack={handleBack} onNext={handleNext} />}
                {currentStep === 4 && <Confirmation onBack={handleBack} />}
            </div>
        </div>
    );
};

export default Checkout;