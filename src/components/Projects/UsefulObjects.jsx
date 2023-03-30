import portfolioproject from "../../assets/portfolioproject.png"
import emovieproject from "../../assets/emovieproject.png"

export const portfolio = {
    name: 'Portfolio',
    img: portfolioproject,
    techs: <span>
             <img src="https://www.rhuanbello.com/assets/languages/javascript.svg" alt="Javascript Icon" />
             <img src="https://www.rhuanbello.com/assets/languages/react.svg" alt="React Icon" />
             <img src="https://www.rhuanbello.com/assets/languages/html.svg" alt="HTML Icon" />
             <img src="https://www.rhuanbello.com/assets/languages/styledcomponents.svg" alt="Styled Components Icon" />
           </span>, 
    github: '',
    site: '',
}

export const emovie = {
    name: 'E.Movie',
    img: emovieproject,
    techs: <span>
             <img src="https://www.rhuanbello.com/assets/languages/javascript.svg" alt="Javascript Icon" />
             <img src="https://www.rhuanbello.com/assets/languages/react.svg" alt="React Icon" />
             <img src="https://www.rhuanbello.com/assets/languages/html.svg" alt="HTML Icon" />
             <img src="https://www.rhuanbello.com/assets/languages/css.svg" alt="CSS Icon" />
           </span>, 
    github: 'https://github.com/eduardomdev/movie_project',
    site: 'https://movie-project-omega-bice.vercel.app/',
}


export const customStyles = {
    content: {
      border: '1px solid #5d419e',
      padding: '0',
      width: '300px',
      height: '200px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },

    overlay: {
      backgroundColor: '#000000a2',
    }
  };