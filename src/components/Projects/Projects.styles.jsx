import styled from "styled-components";

export const ProjectContainer = styled.section`
    background-color: #13131F;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 20px 0px 15px 0px;
`

export const StyleArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    color: #ebebeb;
    height: 70px;
    width: 70%;

    h1{
        font-size: 30px;
        letter-spacing: 1.5px;
    }
`

export const ProjectArea = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    button{
        margin-top: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        cursor: pointer;
        width: 200px;
        height: 25px;
        border: 1px solid #5d419e;
        border-radius: 10px;
        color: #d6d6d6;
        background-color: transparent;
        letter-spacing: 0.5px;
    }
    
    button:hover{
        background-color: #1c1c2e;
        transition: 0.2s;
    }
`

export const ShowCarrousel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    flex-wrap: wrap;
    padding: 10px;
    height: ${props => props.primary == true ? '310px' : ''};
    overflow-y: hidden;
    overflow-x: hidden;

    @media (max-width: 500px){
        width: 90%;
        height: ${props => props.primary == true ? '250px' : ''};
    }
 
`

export const DivImg = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    min-width: 400px;
    height: 281px;
    cursor: pointer;
    margin: 10px 20px;
    border-bottom: 2px solid #c401ff;
;

    img{
        height: 25px;
        width: 25px;
        margin: 5px;
    }

    div{
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        width: 100%;
        height: 100%;
        background-color: #000000be;
    }

    div:hover{
       opacity: 0;
       transition: 0.4s;
    }

    @media (max-width: 500px){
        min-width: 300px;
        height: 216px;
    }

`

export const ModalDiv = styled.div`
    width: 100%;
    font-style: italic;
    color: #303030;
    background-color: #13131F;
    flex-direction: column;
    height: 100%;
    display: flex;
    align-items: center;

    p{
        color: #b4b4b4;
        font-size: 15px;
        margin: 10px 0px 15px 0px;
    }

    img{
        width: 30px;
        height: 30px;
        margin: 0px 5px;
    }

    h1{
        color: #f8f8f8;
        font-size: 25px;
        margin-top: 20px;
        font-style: italic;
    }
`

export const LinkButton = styled.button`
    border-radius: 10px;
    cursor: pointer;
    font-size: 19px;
    border: 1px solid #5d419e;
    background-color: transparent;
    width: 130px;
    margin: 0px 5px;
    height: 30px;
    color: #b4b4b4;

    &:hover{
        background-color: #21213a;
        transition: 0.2s;
    }
`