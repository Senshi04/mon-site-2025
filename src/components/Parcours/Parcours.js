import React from 'react'
import './parcours.css'
import check_circle from '../../assets/check_circle.svg'
import plus_circle from '../../assets/plus_circle.svg'


const Parcours = () => {
  return (
      <section className='parcours'>
        <div className='parcours-title'>
            <div className='container-primary-title'>
                <h1 className='primary-title'>PARCOURS</h1>
                <span className='primary-title-border-2'></span>
            </div>
            <div className='container-secondary-title'>
                <p className='seconday-title'>Apprenez-en plus sur mon parcours</p>
            </div>
        </div>
        <div className='parcours-timeline'>
            <div className='parcours-left'>
                <img src={plus_circle} alt='check_circle' />
                <div className='parcours-left-trait'/>
            </div>
            <div className='parcours-desc'>
                <div className='parcours-date-ongoing'>
                    <p>Sept. 2027</p>
                </div>
                <div className='parcours-text'>
                    <p><strong>ESIEE Paris</strong></p>
                    <p>Informatique et Applications</p>
                </div>
            </div>
        </div>
        <div className='parcours-timeline'>
            <div className='parcours-left'>
                <img src={check_circle} alt='check_circle' />
                <div className='parcours-left-trait'/>
            </div>
            <div className='parcours-desc'>
                <div className='parcours-date'>
                    <p>Sept. 2025</p>
                </div>
                <div className='parcours-text'>
                    <p><strong>BUT Informatique</strong></p>
                    <p>IUT de Villetaneuse, Université Sorbonne Paris Nord</p>
                </div>
            </div>
        </div>
        <div className='parcours-timeline'>
            <div className='parcours-left'>
                <img src={check_circle} alt='check_circle' />
                <div className='parcours-left-trait' />
            </div>
            <div className='parcours-desc'>
                <div className='parcours-date' id='1'>
                    <p>Juin 2022</p>
                </div>
                <div className='parcours-text'>
                    <p><strong>Baccalauréat Général - Mention Bien</strong></p>
                    <p>- Numérique et Sciences Informatiques (19/20)<br/>
                       - Anglais Monde Contemporain (18/20)</p>
                    <p>- Mathématiques Complémentaires (Option)</p>
                </div>
            </div>
        </div>
        <div className='parcours-timeline'>
            <div className='parcours-left'>
                <img src={check_circle} alt='check_circle' />
                <div className='parcours-left-trait' />
            </div>
            <div className='parcours-desc'>
                <div className='parcours-date' id='1'>
                    <p>Sept. 2019</p>
                </div>
                <div className='parcours-text'>
                    <p><strong>Début Lycée</strong></p>
                    <p>- 2nd site internet avec HTML et CSS <br/>
                       - Décision de prendre la spécialité Numérique et Sciences Informatiques</p>
                </div>
            </div>
        </div>
        <div className='parcours-timeline'>
            <div className='parcours-left'>
                <img src={check_circle} alt='check_circle' />
                <div className='parcours-left-trait' />
            </div>
            <div className='parcours-desc'>
                <div className='parcours-date'>
                    <p>Janv. 2019</p>
                </div>
                <div className='parcours-text'>
                    <p><strong>Stage de 3e</strong></p>
                    <p><strong>- 1er site internet avec Wix</strong></p>
                    <p>- Début de ma passion pour l'informatique</p>
                </div>
            </div>
        </div>
      </section>
    )
}

export default Parcours