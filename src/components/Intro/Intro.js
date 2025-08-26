import React from 'react'
import './intro.css'

const Intro = () => {
  return (
    <section className='intro' id='accueil'>
      <div className='intro-desc'>
        <p className='intro-text'>
          <span>Hello,<br/>je suis India CABO !</span><br/>
          En troisième année de BUT Informatique à l'IUT de Villetaneuse (USPN), la conception d'applications et le design numérique m'attirent grandement. Je m'apprête à commencer le cycle d'ingénieur en apprentissage à l'ESIEE Paris, en tant que chargé d'automatisation des processus à la FDJ United. 
        </p>
        <button className='intro-btn primary-button' onClick={() => window.open("/assets/mon-cv.pdf", "_blank")}>Télécharger CV</button>
      </div>
      <img className='intro-photo' alt='moi' src="/assets/moi.png"></img>
    </section>
    )
}

export default Intro