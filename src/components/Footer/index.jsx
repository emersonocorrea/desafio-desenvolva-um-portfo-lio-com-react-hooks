import { Container } from "./style";
import { FaGithub, FaLinkedin, FaFigma } from "react-icons/fa";

export const Footer = () => {
    return(
        <Container>
            <div className="footer">
                <div className="contato">
                    <div>
                        <p>Meu contato:</p>
                        <p>21 980911176</p>
                    </div>
                    <div className="email">
                        <p>Meu E-mail:</p>
                        <p>emersonexilebr@gmail.com</p>
                    </div>
                </div>
                
                <div className="icons">
                    <a href="https://github.com/emersonocorrea" target="_blank"><FaGithub /></a>
                    <a href="#"><FaLinkedin /></a>
                    <a href="#"><FaFigma /></a>
                </div>
            </div>
        </Container>
    )
}