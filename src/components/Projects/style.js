import { styled } from 'styled-components'

export const Container = styled.div`
    margin-top: 100px;
    
    


    h2{
        font-size: 40px;
    }

    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;
        margin: auto;
    }

    ul > li{
        flex: 1;
        display: flex;
        justify-content: center;
        width: 380px;
        margin-bottom: 20px;
    }

    
`