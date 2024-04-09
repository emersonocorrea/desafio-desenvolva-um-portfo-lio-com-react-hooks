import { Container } from "./style";
import { Card } from "../Card";
import { projectsData } from "../../assets/data/data.js"

export const Projects = () => {
    return(
        <Container>
            <h2>Projetos</h2>
            <ul>
                {projectsData.map((item, index) => (  
                                     
                    <li key={index}>                        
                        <Card  img={item.img} title={item.title} desc={item.desc} href={item.link}/>                        
                    </li>
                ))}
                
            </ul>
        </Container>
    )
}

