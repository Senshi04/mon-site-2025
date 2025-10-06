import React from 'react'
import './intro.css'

const Intro = () => {
  return (
    <section className='intro' id='accueil'>
      <div className='intro-desc'>
        <p className='intro-text'>
          <span>Hello,<br/>je suis India CABO !</span><br/>
          L'ingénierie logicielle m'intéresse énormément. Ainsi, j'effectue un cycle d'ingénieur en apprentissage à l'ESIEE Paris en filière "Informatique et Applications". Parallèlement, je suis en alternance à la FDJ United en tant que chargé d'automatisation des processus. 
        </p>
        <button className='intro-btn primary-button' onClick={() => window.open("/assets/mon-cv.pdf", "_blank")}>Télécharger CV</button>
      </div>
      <img className='intro-photo' alt='moi' src="/assets/photo-moi.jpg"></img>
    </section>
    )
}

export default Intro