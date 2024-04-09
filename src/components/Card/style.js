import { styled } from 'styled-components'

export const Container = styled.div`
    border: 1px solid white;
    width: 380px;
    height: 480px;
    border-radius: 10% 0;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;    
    
    

    h3{
        text-align: center;
        margin: 0;
        padding: 0;
        font-size: 30px;
        
        
    }

    img{
        width: 365px;
        height: 250px;
        align-self: center;
        margin-bottom: 20px;
        margin-top: 15px;
    }

    p{
        font-size: 20px;
    }

`