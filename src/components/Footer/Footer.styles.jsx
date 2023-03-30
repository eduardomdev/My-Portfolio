import styled from "styled-components";


export const FooterDiv = styled.footer`
    color: #303030;
    width: 100%;
    height: 300px;
    background-color: #13131F;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1{
        color: #ebebeb;
        font-size: 28px;
        letter-spacing: 1.5px;
        margin-bottom: 50px;

        @media (max-width: 800px){
            margin-top: 30px;
        }
    }

    div{

        display: flex;

        @media (max-width: 800px){
            flex-direction: column;
            margin: 0;
        }
    }


    @media (max-width: 800px){
           height: 450px;
        }
`

export const SpanDiv = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    flex-direction: column;
    margin: 0px 40px;

    a{
        color: #8736f0;
        font-size: 25px;
        cursor: pointer;
    }

    a:hover{
        transition: 0.4s;
        color: #dd6fff;
    }

    p{
        font-size: 15px;
        color: #8d8d8d;
    }

    @media (max-width: 800px){
            margin: 0px 0px 10px 0px;
        
        }

    
`

export const TitleC = styled.h2`
    font-size: 20px;
    margin-left: 10px;
`
