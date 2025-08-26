import React from 'react'
import './parcours.css'


const Parcours = () => {
  return (
      <section className='parcours' id='parcours'>
        <div className='parcours-title'>
            <div className='container-primary-title'>
                <h1 className='primary-title'>PARCOURS</h1>
                <span className='primary-title-border-1'></span>
            </div>
            <div className='container-secondary-title'>
                <p className='seconday-title'>Apprenez-en plus sur mon parcours dans l'informatique</p>
            </div>
        </div>
        <div className='parcours-timeline'>
            <div className='parcours-left'>
                <img src="/assets/plus_circle.svg" alt='plus_circle' />
                <div className='parcours-left-trait'/>
            </div>
            <div className='parcours-desc'>
                <div className='parcours-date-ongoing'>
                    <p>Sept. 2027</p>
                </div>
                <div className='parcours-text'>
                    <p><strong>ESIEE Paris</strong></p>
                    <p>Informatique et Applications</p>
                    <br/>
                    <p>2025 - 2027 : Alternance FDJ United - Chargée de l'automatisation des processus</p>
                </div>
            </div>
        </div>
        <div className='parcours-timeline'>
            <div className='parcours-left'>
                <img src="/assets/check_circle.svg" alt='check_circle' />
                <div className='parcours-left-trait'/>
            </div>
            <div className='parcours-desc'>
                <div className='parcours-date'>
                    <p>Sept. 2025</p>
                </div>
                <div className='parcours-text'>
                    <p><strong>BUT Informatique</strong></p>
                    <p>IUT de Villetaneuse, Université Sorbonne Paris Nord</p>
                    <br />
                    <p>2025 (1an) : Alternance Brigade de sapeurs-pompiers de Paris - Développeuse d'applications métiers C#</p>
                    <p>2024 (2mois) : Stage All Levage - Développeuse Full Stack</p>

                </div>
            </div>
        </div>
        <div className='parcours-timeline'>
            <div className='parcours-left'>
                <img src="/assets/check_circle.svg" alt='check_circle' />
                <div className='parcours-left-trait' />
            </div>
            <div className='parcours-desc'>
                <div className='parcours-date' id='1'>
                    <p>Juin 2022</p>
                </div>
                <div className='parcours-text'>
                    <p><strong>Baccalauréat Général - Mention Bien</strong></p>
                    <br/>
                    <p>Numérique et Sciences Informatiques (19/20)<br/>
                       Anglais Monde Contemporain (18/20)</p>
                    <p>Mathématiques Complémentaires (Option)</p>
                </div>
            </div>
        </div>
        <div className='parcours-timeline'>
            <div className='parcours-left'>
                <img src="/assets/check_circle.svg" alt='check_circle' />
                <div className='parcours-left-trait' />
            </div>
            <div className='parcours-desc'>
                <div className='parcours-date' id='1'>
                    <p>Sept. 2019</p>
                </div>
                <div className='parcours-text'>
                    <p><strong>Début Lycée</strong></p>
                    <br/>
                    <p>2nd site internet avec HTML et CSS <br/>
                       Décision de prendre la spécialité Numérique et Sciences Informatiques</p>
                </div>
            </div>
        </div>
        <div className='parcours-timeline'>
            <div className='parcours-left'>
                <img src="/assets/check_circle.svg" alt='check_circle' />
                <div className='parcours-left-trait' />
            </div>
            <div className='parcours-desc'>
                <div className='parcours-date'>
                    <p>Janv. 2019</p>
                </div>
                <div className='parcours-text'>
                    <p><strong>Stage de 3e</strong></p>
                    <br/>
                    <p>1er site internet avec Wix</p>
                    <p>Début de ma passion pour l'informatique</p>
                </div>
            </div>
        </div>
      </section>
    )
}

export default Parcours