import React from 'react'

import './footer.css'

const Footer = () => {
  return (
    <section className='footer'>
        <nav className={'links'}>
            <a href="#accueil">ACCUEIL</a>
            <a href="#parcours">PARCOURS</a>
            <a href="#projets">PROJETS</a>
            <a href="#a-propos">À PROPOS</a>
        </nav>
        <div>
            <p>Site développée par India CABO</p>
            <p>© 2025 India - Portfolio. Tous droits réservés.</p>
        </div>
    </section>
  )
}

export default Footer