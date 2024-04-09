import { styled } from 'styled-components'

export const Container = styled.div`    
    height: 137px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1140px;
    margin: auto;

    ul{
        display: flex;
        list-style: none;
        margin-right: 400px;
        
    }

    ul > li > a{
        display: inline-block;
        color: white;
        padding: 0px 30px;
        font-size: 1rem;
        text-align: center;
        text-decoration: none;
    }

    

    .icons > a{
        color: white;
        margin-right: 15px;
        font-size: 1.5rem;
    }


`