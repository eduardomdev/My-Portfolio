import styled from "styled-components";

export const AboutMe = styled.section`
    font-family: 'Raleway', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #13131F;

`

export const TextAbout = styled.div`
    margin-bottom: 40px;
    display: flex;
    color: #ebebeb;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 70%;
    letter-spacing: 1px;

    h1{
        padding: 50px 0px 5px 0px;
        font-size: 30px;
        letter-spacing: 1.5px;
    }

    p{
        margin-top: 45px;
        letter-spacing: 1px;
        line-height: 28px;
        font-style: italic;
        font-weight: 500;
        overflow-y: hidden;
        text-align: center;    
        color: #afafaf;
    }

`


export const TechAbout = styled.div`
    margin-top: 25px;
    background-color: #13131F;
    border-radius: 20px;
    color: #ebebeb;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 90%;

    h1{
        font-size: 30px;
        letter-spacing: 1.5px;
        padding: 20px 0px 5px 0px;
    }
`

export const Tecnologies = styled.div`
    width: 100%;
    padding: 35px 20px 20px 20px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;

    @media (max-width: 500px){
        width: 100%;
    }
`

export const TechIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px;
    background-color: #363636;
    border-bottom: 2px solid #c401ff;
    border-radius: 0px 20px 0px 0px;
    width: 110px;
    height: 110px;

    img{
        border-radius: 10px;
        width: 70px;
        height: 70px;
    }


    @media (max-width: 550px){
        height: 90px;
        width: 90px;

        img{
            width: 60px;
            height: 60px;
        }
    }

    @media (max-width: 300px){

        img{
            width: 50px;
            height: 50px;
        }

        height: 75px;
        width: 75px;
    }
`