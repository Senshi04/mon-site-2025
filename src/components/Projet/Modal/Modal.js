import React from "react";
import "./modal.css";

const Modal = ({ projet, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
        <div className="container-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={onClose}>×</button>
            <div className="modal-content">
                <h3 className="modal-content-type">{projet.type}</h3>
                <h2>{projet.title}</h2>
                <div className="modal-content-mockups">
                    { projet.mockups &&
                        Object.entries(projet.mockups).map(([cle, val]) => (
                        <div>
                            <img key={cle} alt={cle} src={`/assets/${val}`} />
                        </div>
                    ))}
                </div>
                <p>{projet.desc_long}</p>
            </div>
        </div>
        </div>
    );
};

export default Modal;