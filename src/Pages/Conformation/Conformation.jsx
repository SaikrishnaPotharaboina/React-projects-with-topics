import React, { useState } from "react";
import "./Conformation.css";
import { IoSpeedometerOutline } from "react-icons/io5";
import { TbArrowUp } from "react-icons/tb";

function ConfirmationModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [ActiveStatus, setActiveStatus] = useState();
    const openModel = () => setIsOpen(true)
    const closeModel = () => setIsOpen(false)

    const handleConform = () => {
        setActiveStatus("Confirmed")
        closeModel();

    }

    const handleCanclled = () => {
        setActiveStatus("Cancel")
        closeModel();

    }

    return (
        <div className="modal-container">
            <button onClick={openModel} className="open-modal-btn">Open Confirmation Modal</button>
            {isOpen && (
                <div className="modal-backdrop">
                    <div className="modal-box">
                        <h2 className="modal-title">Confirm Action</h2>
                        <p className="modal-message">Are you sure you want to proceed?</p>
                        <div className="modal-buttons">
                            <button onClick={handleConform} className="confirm-btn">Confirm</button>
                            <button onClick={handleCanclled} className="cancel-btn">Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            {ActiveStatus && (
                <p className="action-status" data-testid="action-status">{ActiveStatus}</p>
            )}
            {/* <div >Action status message here</div> */}
        </div>
    );
}

export default ConfirmationModal;
