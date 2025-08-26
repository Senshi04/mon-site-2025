import React from 'react'

import "./contact.css"

const Contact = ({onClose}) => {

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Contactez-moi</h2>
        <div className="contact-info">
          <p>Email : <a href="mailto:indiacabo@edu.esiee.com">indiacabo@edu.esiee.com</a></p>
          <p>LinkedIn : <a href="https://linkedin.com/in/india-cabo" target="_blank" rel="noopener noreferrer">Mon profil</a></p>
          <p>GitHub : <a href='https://github.com/Senshi04' target="_blank" rel="noopener noreferrer">Senshi04</a></p>
          <p>Instagram (Duo) : <a href='https://www.instagram.com/kzingroup/' target="_blank" rel="noopener noreferrer">K-ZIN</a></p>
          <p>Instagram (Groupe): <a href='https://www.instagram.com/outsiderfam/' target="_blank" rel="noopener noreferrer">Outsider Fam</a></p>
          <p>Youtube : <a href='https://www.youtube.com/@outsiderfam' target="_blank" rel="noopener noreferrer">Outsider Fam</a></p>
        </div>
      </div>
    </div>
  );
}

export default Contact