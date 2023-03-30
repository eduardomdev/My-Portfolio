import { HeaderContainer, UlStyle } from "./Header.styles"
import { FaLinkedin, FaGithub , FaInstagram} from "react-icons/fa";

function Header(){
    return(
        <HeaderContainer>
            <UlStyle>
                <li><a href="https://github.com/eduardomdev"><FaGithub></FaGithub></a></li>
                <li><a href="https://www.linkedin.com/in/eduardo-maciel-463572264/"><FaLinkedin></FaLinkedin></a></li>
                <li><a href="https://www.instagram.com/eduardo.macieln/"><FaInstagram></FaInstagram></a></li>
            </UlStyle>
        </HeaderContainer>
    )
}

export default Header