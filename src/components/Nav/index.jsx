import { Container } from "./style";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export const Nav = () => {
    return(
        <Container>
            <ul>
                <li><a href="#">Projetos</a></li>
                <li><a href="#">Tecnologias</a></li>
                <li><a href="#">Sobre mim</a></li>
            </ul>
            <div className="icons">
                <a href="https://github.com/emersonocorrea" target="_blank"><FaGithub /></a>
                <a href="#"><FaLinkedin /></a>
            </div>
        </Container>
    )

}