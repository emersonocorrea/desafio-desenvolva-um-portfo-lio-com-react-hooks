import { ButtonPrimary } from "./style";

export const Button = ({text, href}) => {
    

    return(
        <ButtonPrimary href={href}>{text}</ButtonPrimary>
    )
}