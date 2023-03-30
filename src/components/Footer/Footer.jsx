import { FooterDiv, SpanDiv } from "./Footer.styles"
import { FaLinkedin, FaGithub , FaInstagram} from "react-icons/fa";
import {  MdOutlineEmail } from "react-icons/md";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";


function Footer(){

    useEffect(() => {

        const sr = ScrollReveal({
            origin: 'left',
            distance: '80px',
            duration: 800,
            reset: true,
        });
    
        sr.reveal('#animationFooter', {
            opacity: 0,
            interval: 100,
        })
    
      }, [])

    return(
        <FooterDiv id="animationFooter">
            <h1>Contatos</h1>
            <div>
                 <SpanDiv>
                        <a href="https://www.linkedin.com/in/eduardo-maciel-463572264/"><FaLinkedin></FaLinkedin></a>
                        <p>@eduardo-macieln</p>
                    </SpanDiv>
                    <SpanDiv>
                        <a href="https://github.com/eduardomdev"><FaGithub></FaGithub></a>
                        <p>@eduardomdev</p>
                    </SpanDiv>
                    <SpanDiv>
                        <a href="https://www.instagram.com/eduardo.macieln/"><FaInstagram></FaInstagram></a>
                        <p>@eduardo.macieln</p>
                    </SpanDiv>
                    <SpanDiv>
                        <a href=""><MdOutlineEmail></MdOutlineEmail></a>
                        <p>eduardomneris@gmail.com</p>
                    </SpanDiv>
            </div>
        </FooterDiv>
    )
}

export default Footer