import { styled } from 'styled-components'

export const ButtonPrimary = styled.a`
    background: linear-gradient(0.25turn, #945DD6 , #6978D1, #13ADC7);
    color: white;
    text-decoration: none;
    text-align: center;
    padding: 10px;
    border-radius: 20px;
    width: 150px;
    display: inline-block;
    cursor: pointer;

    &:hover{
        background: linear-gradient(0.25turn, #13ADC7 , #6978D1, #945DD6);
        
    }

`