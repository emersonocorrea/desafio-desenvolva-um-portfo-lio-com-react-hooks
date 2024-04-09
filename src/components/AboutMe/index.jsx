import { Container } from "./style";
import { aboutMeData } from "../../assets/data/data";

export const AboutMe = () => {
    return(
        <Container>
            <h2>Sobre mim</h2>
            <ul>
                {aboutMeData.map((item, index) => (
                    <li key={index}>
                        <p>{item.year}</p>
                        <small>{item.desc}</small>
                    </li>
                ))}
            </ul>
        </Container>
    )
}