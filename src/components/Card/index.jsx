import { Container } from "./style";
import { Button } from "../ButtonPrimary";

export const Card = ({ img, title, desc, href }) => {
    return(
        <Container>            
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{desc}</p>
            <Button text="Clique aqui" href={href}/>
        </Container>
    )
}