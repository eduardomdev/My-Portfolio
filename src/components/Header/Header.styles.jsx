import styled from "styled-components";

export const HeaderContainer = styled.header`
    padding-top: 20px;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: black;
    font-family: sans-serif;
`

export const UlStyle = styled.ul`
    color: #d4d4d492;
    display: flex;
    margin-right: 40px;

    li{
        font-size: 20px;
        cursor: pointer;
        padding: 10px;
        list-style: none;
    }

    a{
        color: #d4d4d492;
    }

    a:hover{
        transition: 0.4s;
        color: #f3f3f3;
    }

    @media (max-width: 500px){

        margin-right: 15px;

        li{
            font-size: 15px;
        }
    }
`