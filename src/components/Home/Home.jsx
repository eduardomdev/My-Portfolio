import { HomeDiv, InfoContainer, ImgContainer, TextContainer, HomeButton, BackgroundDiv} from "./Home.styles"
import Header from "../Header/Header"


function Home(){

    function scrollDown(){
      
        window.scrollTo({ top: 660, behavior: 'smooth' })
      
      }

    return(
            <HomeDiv>
                <BackgroundDiv>
                    <Header></Header>
                    <InfoContainer>
                        <ImgContainer>
                        </ImgContainer>
                        <TextContainer>
                            <h1>Eduardo Maciel</h1>
                            <p>Frontend Developer</p>
                            <HomeButton onClick={scrollDown} ><img src="https://www.geodigital.tech/static/img/chevron-down.png" alt="Ir para proxima sessão!" /></HomeButton>
                        </TextContainer>
                    </InfoContainer>
                </BackgroundDiv>
            </HomeDiv>
    )
}

export default Home