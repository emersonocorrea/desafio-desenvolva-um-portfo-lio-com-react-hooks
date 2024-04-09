import { styled } from 'styled-components'

export const Container = styled.div`
    max-width: 100vw;
    height: 137px;
    
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    .footer{
        height: 137px;
        display: flex;
        align-items: center;
        width: 1140px;
        justify-content: space-between;
    }    

    .contato{
        display: flex;
        gap: 20px;
        align-items: center;
    }

    .icons a{
        color: white;
        width: 40px;
        height: 40px;        
        margin-right: 5px;
        
    }

    .contato p {
        margin: 0;
        text-align: center;
    }
`