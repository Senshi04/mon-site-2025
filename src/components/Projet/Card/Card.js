import React from 'react'
import './card.css'

export default function Card({link, type, year, title, text}) {
  return (
    <section>
        <div className='card'>
            <div className='card-img'>
                <img alt='project-img' src={link} />
                <p><span>{type}</span></p>
            </div>
            <div className='project-desc'>
                <p>{year}</p>
                <p>{title}</p>
                <p>{text}</p>
            </div>
        </div>
    </section>
  );
}