import { useEffect, useState } from 'react'

import './projet.css'
import './Modal/modal.css'

import Card from './Card/Card'
import Modal from './Modal/Modal';

import supabase from '../../supabase-client';



const Projet = () => {

  const [projetList, setProjetList] = useState([]);
    

  useEffect(() => {
    fetchProjet()
  }, []);



  const fetchProjet = async () => {
    const {data, error} = await supabase.from("Projet").select("*");
  
    if(error) {
      console.log("Error fetching : ", error);
    }
    else {
      setProjetList(data);
    }
  }
  
  const [selectedProject, setSelectedProject] = useState(null);
  
  const openModal = (projet) => {
    setSelectedProject(projet);
    console.log(selectedProject);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // sécurité au démontage
    };
  }, [selectedProject]);


  return (
    <section>
        <div className='projet' id='projets'>
            <div className='container-primary-title'>
                <h1 className='primary-title'>PROJETS</h1>
                <span className='primary-title-border-2'></span>
            </div>
            <div className='container-secondary-title'>
                <p className='seconday-title'>Découvrez mes différents projets</p>
            </div>
             <div className='container-card'>

              {projetList.map((proj) => {
                
                return (
                  <div onClick={() => openModal(proj)}>
                    <Card projet={proj} />
                  </div>
                )
              })}
            </div>
            
            {selectedProject && (
              <Modal projet={selectedProject} onClose={closeModal} />
            )}
        </div>
    </section>
  )
}

export default Projet