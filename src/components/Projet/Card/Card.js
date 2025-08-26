import './card.css'

const Card = ({projet}) => {
  
  const imgLink = projet.mockups?.link_1; 

  const imgSrc = "/assets/"+ imgLink;
  
  if (!imgSrc) {
    console.warn("Image non trouvée pour :", imgLink);
  }
  

  return (
    
    <section>
        <div className='card' >
            <div className='card-img'>
              
                <img alt='project-img' src={imgSrc} />
                <p><span>{projet.type}</span></p>
            </div>
            <div className='project-desc'>
                <p>{projet.year}</p>
                <p>{projet.title}</p>
                <p>{projet.desc_lil}</p>
            </div>
            
        </div>
    </section>
  );
}

export default Card