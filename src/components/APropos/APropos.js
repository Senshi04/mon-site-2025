import React from 'react'
import './apropos.css'
import InstagramEmbed from '../Instagram/InstagramEmbed'


const APropos = () => {
  return (
    <section>
        <div className='a-propos' id='a-propos'>
            <div className='container-primary-title'>
                <h1 className='primary-title'>A PROPOS</h1>
                <span className='primary-title-border-1'></span>
            </div>
            <div className='container-secondary-title'>
                <p className='seconday-title'>Apprenez-en plus sur ma connexion avec la danse </p>
            </div>
            <div className='container-neumorphism-title'>
                <div className='neumorphism-title'>
                    <h1>DANSE</h1>
                </div>
            </div>
            <div className='container-desc'>
                <div className='container-side-desc'>
                    <div className='container-left-desc'>
                        <p>La danse est une activité que je pratique sérieusemment depuis 4 ans. Mon parcours de danseuse est une <strong>source d'inspiration constante</strong> pour mon travail et mes projets. Elle me permet d'explorer de nouvelles perspectives et de me <strong>dépasser</strong> sans cesse.</p>
                        <InstagramEmbed url={"https://www.instagram.com/reel/DIHEDYZgKvg/"}/>
                    </div>
                    <div className='container-right-desc'>
                        <InstagramEmbed url={"https://www.instagram.com/reel/C0HCvIytIf_/"} />
                        <p>Avec mon petit-frère, nous avons un duo nommé K-ZIN. Notre style principal est la KPOP. Cependant, nous faisons également pas mal de chorégraphies hip hop. Notre duo est avant tout une histoire de <strong>complicité</strong> et de <strong>partage</strong>.</p>
                    </div>
                </div>
                <iframe width="90%" height="400" src="https://www.youtube.com/embed/Ex_nvXF5zLk?si=2ExX3kStP1-VEg2G&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p>
                    J’ai pu rejoindre un groupe de danse au style K-POP et HIP HOP. D’ailleurs, nous sommes également une <strong>association</strong> à but non lucratif.  Ainsi, j’ai déjà eu l'occasion de donner des cours de danse à de jeunes enfants (entre 10 et 15 ans).
                    La danse m’a aidé à devenir une personne plus ouverte aux autres, moins réservée et timide. Elle permet également de stimuler ma <strong>créativité</strong> et ma <strong>rigueur</strong> chaque jour. 
                </p>
            </div>

        </div>
    </section>
  )
}


export default APropos


