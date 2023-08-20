import React from "react";
import "./confirmation-styles.scss";

const Confirmation = ({ onBack, onConfirm }) => {
    return (
        <div className="confirmation__container">
            <div className="confirmation">
                <h2>
                    Confirmation
                </h2>
                <p>
                    Your order has been confirmed.
                </p>
                <div className="confirmation__buttons">
                    <button type="button" onClick={onBack}>
                        Back
                    </button>
                    <button type="button" onClick={onConfirm}>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Confirmation;