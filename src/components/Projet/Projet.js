import { React, useRef } from 'react'
import './projet.css'
import Card from './Card/Card'
import projet1 from "../../assets/Medicial_figma.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';




const Projet = () => {

  return (
    <section>
        <div className='projet'>
            <div className='container-primary-title'>
                <h1 className='primary-title'>PROJETS</h1>
                <span className='primary-title-border-1'></span>
            </div>
            <div className='container-secondary-title'>
                <p className='seconday-title'>Découvrez les différents projets que j’ai pu faire</p>
            </div>
             <div className='container-card'>
               <Card link={projet1} type={"Complet"} year={2025} title={"Chatbot conversationnel médical"} text={"blablablablaaaaaaa"}/>
               <Card link={projet1} type={"Complet"} year={2025} title={"Chatbot conversationnel médical"} text={"blablablablaaaaaaa"}/>
               <Card link={projet1} type={"Complet"} year={2025} title={"Chatbot conversationnel médical"} text={"blablablablaaaaaaa"}/>
               <Card link={projet1} type={"Complet"} year={2025} title={"Chatbot conversationnel médical"} text={"blablablablaaaaaaa"}/>
               <Card link={projet1} type={"Complet"} year={2025} title={"Chatbot conversationnel médical"} text={"blablablablaaaaaaa"}/>
               <Card link={projet1} type={"Complet"} year={2025} title={"Chatbot conversationnel médical"} text={"blablablablaaaaaaa"}/>
               <Card link={projet1} type={"Complet"} year={2025} title={"Chatbot conversationnel médical"} text={"blablablablaaaaaaa"}/>
               <Card link={projet1} type={"Complet"} year={2025} title={"Chatbot conversationnel médical"} text={"blablablablaaaaaaa"}/>
            </div>
        </div>
    </section>
  )
}

export default Projet