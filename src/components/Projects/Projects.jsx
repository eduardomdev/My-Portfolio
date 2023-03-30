import { ProjectContainer, StyleArea, ProjectArea, ShowCarrousel, DivImg, ModalDiv, LinkButton } from "./Projects.styles"
import { FaCaretDown, FaLink, FaGithub} from "react-icons/fa";
import { useEffect, useState } from "react";
import Modal from 'react-modal'
import ScrollReveal from "scrollreveal";
import { portfolio, emovie, customStyles } from "./UsefulObjects";


function Projects() {


    useEffect(() => {

        const sr = ScrollReveal({
            origin: 'left',
            distance: '80px',
            duration: 800,
            reset: true,
        });
    
        sr.reveal('#animationProjects', {
            opacity: 0,
            interval: 100,
        })
    
      }, [])    

    Modal.setAppElement('#root');

    const images = [emovie, portfolio]
    
    const [modalIsOpen, setIsOpen] = useState(false);
    const [newValue, setNewValue] = useState(null)
    const [height, setHeight] = useState(true);
    const [arrow, setArrow] = useState(false);

    function modalValue(projeto){
        setNewValue(projeto)
        openModal()
    }
    
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function ViewProject() {
        setHeight(!height)
        setArrow(!arrow)
    }

    return (
        <ProjectContainer id="animationProjects" >
            <StyleArea>
                <h1>Portifolio</h1>
                <FaCaretDown></FaCaretDown>
            </StyleArea>
            <ProjectArea>
                <ShowCarrousel primary={height}>
                    {
                        images.map(projeto => (
                            <DivImg key={projeto.name} onClick={() => modalValue(projeto)} style={{backgroundImage: `url(${projeto.img})`}}>
                                <div>
                                    <h4>{projeto.name}</h4>
                                    {projeto.techs}
                                </div>
                            </DivImg>
                        ))
                    }
                </ShowCarrousel>
                {arrow == false ? 
                <button onClick={ViewProject}>Ver Mais</button>
                :
                <button onClick={ViewProject}>Ver Menos</button>
                }
            </ProjectArea>
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}> 
                    {(
                       newValue == null 
                       ? <h2>Não encontrado!</h2> 
                       : <ModalDiv>
                            <h1>{newValue.name}</h1>
                            <p>Tecnologias Utilizadas:</p>
                            <span>{newValue.techs}</span>
                            <p>{newValue.tecnologias}</p>
                            <span>
                                <a href={newValue.site}><LinkButton><FaLink></FaLink></LinkButton></a>
                                <a href={newValue.github}><LinkButton><FaGithub></FaGithub></LinkButton></a>
                            </span>
                         </ModalDiv>
                    )}
                </Modal>   
        </ProjectContainer>
    )
}

export default Projects