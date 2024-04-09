import { styled } from 'styled-components'

export const Container = styled.div`
    background-color: black;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    main {
        max-width: 1140px;
        margin: auto;
        padding: 0px 10px;
        /* margin: 150px;         */
        background-color: black;
        margin-top: 150px;
        margin-bottom: 150px;
    }

    .banner{
        color: white;
        max-width: 60%;
    }

    .banner > h1{
        margin: 0;
        padding: 0;
        font-size: 51px;
    }

    .banner p{
        margin: 0;
        padding: 0;
        font-size: 28px;
        margin-left: 30px;
        margin-top: 25px;
        margin-bottom: 40px;
        text-align: left;
    }
`