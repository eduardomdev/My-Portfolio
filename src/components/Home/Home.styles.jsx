import styled, { keyframes } from "styled-components";

export const HomeDiv = styled.section`
    font-family: 'Open Sans', sans-serif;
    background-color: #39383f;
    background-size: cover;
    background-image: url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
    width: 100%;
    height: 100vh;

    @media (max-height: 530px){
        height: 660px;
    }
`

export const BackgroundDiv = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000000bc;
`

export const InfoContainer = styled.div`
    height: 90%;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const ImgContainer = styled.div`
    border: 2px solid #e2e2e2;
    background-size: 250px 250px;
    background-image: url('https://media.licdn.com/dms/image/D4D03AQHgzy_43enw7g/profile-displayphoto-shrink_800_800/0/1675396201732?e=1681344000&v=beta&t=tHEoRXowlEl6ZsHYjfb8LNvjy2jq-RM9Iml6meQlX4Q');
    border-radius: 50%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 250px;
    width: 250px;

    @media (max-width: 600px){
        height: 230px;
        width: 230px;
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #f7f7f7;

    h1{
        margin-top: 20px;
        font-size: 80px;
        font-family: 'Raleway', sans-serif;
    }
    p{
        margin-top: 5px;
        font-size: 2.5vw;
        font-family: 'Raleway', sans-serif;
        letter-spacing: 3px;
    }

    @media (max-width: 800px){

            h1{
                font-size: 11vw;
            }

            p{
                font-size: 4.5vw;
            }

        }
`

const rotate = keyframes`
    0%{
        transform: translateY(0px);
    }

    50%{
        transform: translateY(20px);
    }

    100%{
        transform: translateY(0px);
    }
`

export const HomeButton = styled.button`
    margin-top: 20px;
    border-radius: 3px;
    letter-spacing: 3px;
    color: white;
    font-size: 14px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    width: 100px;
    height: 100px;
    outline: 0;

    img{
        animation: ${rotate} 1.5s infinite;
    }

    @media (max-width: 450px){
            margin-top: 50px;

    }

`



