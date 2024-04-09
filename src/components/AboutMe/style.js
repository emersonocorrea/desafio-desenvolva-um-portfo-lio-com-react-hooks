import { styled } from 'styled-components'

export const Container = styled.div`
    margin: auto;
    margin-top: 80px;

    h2{
        font-size: 40px;
    }

    ul {
        display: flex;
        gap: 10px;
        justify-content: center;
        padding: 0;
    }

    ul > li > p{
        text-align: center;
        font-weight: bold;
    }

    ul > li > small{
        text-align: center;
    }

`